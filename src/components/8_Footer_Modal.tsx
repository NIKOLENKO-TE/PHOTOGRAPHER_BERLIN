//8_Footer_Modal.tsx
import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";

type NikolenkoTEBlockModalProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const NikolenkoTEBlockModal: React.FC<NikolenkoTEBlockModalProps> = ({
  showModal,
  setShowModal,
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const [fileNames, setFileNames] = useState<string[]>([]);
  const { t } = useTranslation("NikolenkoTEBlockModal");

  const validationSchema = Yup.object({
    name: Yup.string().required(t("validation.modal.name.required")),
    email: Yup.string()
      .email(t("validation.modal.email.invalid"))
      .required(t("validation.modal.email.required")),
    message: Yup.string().required(t("validation.modal.message.required")),
    files: Yup.array().test(
      "fileType",
      t("validation.modal.file.type.invalid"),
      (value) => {
        if (!value || value.length === 0) return true; // Allow empty array
        const allowedTypes = [
          "image/svg+xml",
          "image/png",
          "image/jpeg",
          "image/bmp",
          "image/gif",
        ];
        return value.every((file) => allowedTypes.includes(file.type));
      }
    ),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
      files: [],
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);
    },
  });

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setShowModal(false);
      if (document.body) {
        document.body.style.overflow = "unset";
      }
    }
  };

  const handleCancelClick = () => {
    setShowModal(false);
    if (document.body) {
      document.body.style.overflow = "unset";
    }
  };

  const handleSendClick = () => {
    if (!formik.isValid) {
      return;
    }

    const formData = new FormData();
    formData.append("name", formik.values.name);
    formData.append("email", formik.values.email);
    formData.append("message", formik.values.message);
    files.forEach((file, index) => {
      formData.append(`file${index + 1}`, file);
    });

    fetch("https://mockbin.org/requests", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          // Data successfully sent
          setShowModal(false);
          setFiles([]);
          setFileNames([]);
        } else {
          throw new Error("Error sending data to server");
        }
      })
      .catch((error) => {
        // Handle errors
        console.error("Error sending data to server:", error);
      });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedFiles = Array.from(event.target.files).slice(0, 5); // Limit to 5 files
      setFiles(selectedFiles);
      const selectedFileNames = selectedFiles.map((file) => file.name);
      setFileNames(selectedFileNames);
      formik.setFieldValue("files", selectedFiles);
    }
  };

  const ModalContainerLeft = (
    <div id="modal_container_left">
      <h2 className="whitespace-nowrap text-white text-2xl px-5 pb-1 inline-block bg-gradient-to-l from-cyan-500 to-blue-500 border border-purple-200 hover:bg-purple-600 rounded-xl flex-nowrap mb-2">
      {t("text.modal.send.message")}
      </h2>

      <div className="relative mb-3">
        <input
          type="text"
          className="peer block h-[58px] w-full rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
          id="input_name"
          name="name"
          placeholder={t("text.modal.name")}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div
            className="text-white mt-2  text-bold bg-gradient-to-l w-full rounded-xl flex-nowrap shadow-sm mb-2"
            style={{ backgroundColor: "rgba(255, 0, 0, 0.238)" }}
          >
            {formik.errors.name}
          </div>
        ) : null}
        <label
          htmlFor="input_name"
          className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none "
        >
          {t("text.modal.name")}
        </label>
      </div>
      <div className="relative mb-3">
        <input
          type="email"
          className="peer  block h-[58px] w-full rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
          id="input_email"
          name="email"
          placeholder={t("text.modal.email")}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <div
            className="text-white mt-2 text-bold bg-gradient-to-l w-full rounded-xl flex-nowrap shadow-sm mb-2"
            style={{ backgroundColor: "rgba(255, 0, 0, 0.238)" }}
          >
            {formik.errors.email}
          </div>
        ) : null}
        <label
          id="input_email_label"
          className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none "
        >
          {t("text.modal.email")}
        </label>
      </div>
      <div className="relative ">
        <textarea
          className="peer  block h-[120px] w-full rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
          id="input_message"
          name="message"
          placeholder={t("text.modal.message")}
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{ whiteSpace: "normal" }}
        />
        {formik.touched.message && formik.errors.message ? (
          <div
            className="text-white mt-2 text-bold bg-gradient-to-l w-full rounded-xl flex-nowrap shadow-xl"
            style={{ backgroundColor: "rgba(255, 0, 0, 0.238)" }}
          >
            {formik.errors.message}
          </div>
        ) : null}
        <label
          htmlFor="input_message_here"
          className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none"
        >
          {t("text.modal.message")}
        </label>
      </div>
    </div>
  );

  const ModalContainerRight = (
    <div id="modal_container_right">
      <div className="flex flex-col justify-between h-full">
        <div id="modal_container_right_file_title" className="">
          <label
            id="message_file_input"
            className="whitespace-nowrap text-white text-2xl px-5 pb-1 inline-block bg-gradient-to-l from-cyan-500 to-blue-500 border border-purple-200 hover:bg-purple-600 rounded-xl flex-nowrap mb-2"
          >
            {t("text.modal.attach.photo")}
          </label>
        </div>
        <div id="modal_container_right_file_input" className=" ">
          <div id="file_input_container" className="">
            <label
              id="dropzone-file-label"
              className="flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 py-4"
            >
              <div className="h-auto md:h-[180px] flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 ">
                    <span className="font-semibold"> {t("text.modal.click.upload.1")}</span> 
                    {t("text.modal.click.upload.2")}
                  </p>
                  <p className="text-xs text-gray-500 ">
                    {t("text.modal.click.upload.3")}
                  </p>
                </div>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                multiple
                onChange={handleFileChange}
              />
            </label>
          </div>
          <div id="file_input_files_names" className="text-white">
            {fileNames.length > 0 && (
              <p>Attached files: {fileNames.join(", ")}</p>
            )}
          </div>
          {formik.touched.files && formik.errors.files ? (
            <div
              className="text-white -mt-0 mb-2 text-bold bg-gradient-to-l w-full rounded-xl flex-nowrap shadow-sm"
              style={{ backgroundColor: "rgba(255, 0, 0, 0.238)" }}
            >
              {formik.errors.files}
            </div>
          ) : null}
        </div>
        <div id="modal_container_right_file_buttons" className="">
          <div className="grid grid-cols-2 gap-2 pt-4 ">
            <button
              id="file_input_button_cancel"
              className="text-white text-xl h-[30px] whitespace-nowrap rounded-md border border-purple-200 bg-gradient-to-l from-purple-500 to-pink-500 hover:bg-gradient-to-l"
              onClick={handleCancelClick}
            >
              <p className="mt-[-5px]">{t("button.modal.cancel")}</p>
            </button>
            <button
              id="file_input_button_send"
              type="submit"
              className="text-white text-xl h-[30px] whitespace-nowrap rounded-md border border-purple-200 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl"
              onClick={handleSendClick}
            >
              <p className="mt-[-5px]">{t("button.modal.send")}</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    showModal && (
      <div
        id="modal_shadow"
        className="overflow-auto fixed -top-2 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm backdrop-brightness-50 z-50"
        onClick={handleBackdropClick}
      >
        <div
          className="lg:!max-w-[700px] shadow-2xl p-4 rounded-xl bg-white bg-opacity-50 backdrop-blur-sm"
          style={{
            position: "fixed",
            top: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "calc(100% - 20px)",
            maxWidth: "calc(100% - 20px)",
          }}
        >
          <form onSubmit={formik.handleSubmit}>
            <div
              id="modal_container"
              className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-self-center h-full max-w-screen overflow-y-auto"
            >
              {ModalContainerLeft}
              {ModalContainerRight}
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default NikolenkoTEBlockModal;