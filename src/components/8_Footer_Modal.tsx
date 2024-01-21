//8_Footer_Modal.tsx
import React from "react";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";

type NikolenkoTEBlockModalProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
  style?: React.CSSProperties;
};

const NikolenkoTEBlockModal: React.FC<NikolenkoTEBlockModalProps> = ({
  showModal,
  setShowModal,
  style = {},
  
}) => {
  useEffect(() => {
    const body = document.body;
    const disableScroll = () => {
      body.style.overflow = "hidden";
    };
    const enableScroll = () => {
      body.style.overflow = "auto";
    };
    if (showModal) {
      disableScroll();
    } else {
      enableScroll();
    }
    return () => {
      enableScroll();
    };
  }, [showModal]);

  const [files, setFiles] = useState<File[]>([]);
  const [fileNames, setFileNames] = useState<string[]>([]);
  const { t } = useTranslation("NikolenkoTEBlockModal");
  const validationSchema = Yup.object({
    name: Yup.string().required(t("validation.modal.name.required")),
    email: Yup.string()
      .required(t("validation.modal.email.required"))
      .test(
        "email-validation",
        t("validation.modal.email.invalid"),
        function (value) {
          const errors: Yup.ValidationError[] = [];

          if (!/^[^@]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}[^@]*$/.test(value)) {
            errors.push(
              new Yup.ValidationError(
                t("validation.modal.email.invalid"),
                value,
                "email"
              )
            );
          }

          if (!/@/.test(value)) {
            errors.push(
              new Yup.ValidationError(
                t("validation.modal.email.invalid.at"),
                value,
                "email"
              )
            );
          }
          if (!/\./.test(value)) {
            errors.push(
              new Yup.ValidationError(
                t("validation.modal.email.invalid.dot"),
                value,
                "email"
              )
            );
          }
          if (value.length < 3) {
            errors.push(
              new Yup.ValidationError(
                t("validation.modal.email.invalid.user"),
                value,
                "email"
              )
            );
          }
          if (/\s/.test(value)) {
            errors.push(
              new Yup.ValidationError(
                t("validation.modal.email.invalid.space"),
                value,
                "email"
              )
            );
          }

          if (/[,:;"№!#%$%*()=+{}[\]/?~^&<>]/.test(value)) {
            errors.push(
              new Yup.ValidationError(
                t("validation.modal.email.invalid.spec.characters"),
                value,
                "email"
              )
            );
          }

          if (!/^[a-zA-Z0-9.@_-]+$/.test(value)) {
            errors.push(
              new Yup.ValidationError(
                t("validation.modal.email.invalid.layout"),
                value,
                "email"
              )
            );
          }

          if (!/^[^@]+@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,63})$/.test(value)) {
            errors.push(
              new Yup.ValidationError(
                t("validation.modal.email.invalid.domain"),
                value,
                "email"
              )
            );
          }

          if (errors.length > 0) {
            const validationError = new Yup.ValidationError(
              errors.map((error) => `${error.message}`).join(", "),
              value,
              "email"
            );
            throw validationError;
          }

          return true;
        }
      ),
    message: Yup.string().required(t("validation.modal.message.required")),
    files: Yup.array().test(
      "fileType",
      t("validation.modal.file.type.invalid"),
      function (value) {
        if (!value || value.length === 0) return true;
        const allowedTypes = [
          "image/svg+xml",
          "image/png",
          "image/jpeg",
          "image/jpg",
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
      console.log(values);
    },
  });

  const handleCancelClick = () => {
    setShowModal(false);
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
          setShowModal(false);
          setFiles([]);
          setFileNames([]);
        } else {
          throw new Error("Error sending data to server");
        }
      })
      .catch((error) => {
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
  const input_name_email_message_style =
    "peer block h-[58px] w-full rounded-md border border-solid border-neutral-300 bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]";
  const validation_error_message_style =
    "w-auto px-2 pb-1 text-white mt-1 text-bold bg-red-600 bg-opacity-60 rounded-xl whitespace-wrap";
  const input_text_placeholder_style =
    "pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none ";
  const modal_label_style =
    "whitespace-nowrap text-white text-2xl px-3 pb-1 flex-nowrap mb-2 text-center bg-gradient-to-l from-cyan-500 to-blue-500 border border-purple-200 hover:bg-purple-600 rounded-xl";
  const button_cancel_style =
    "text-white text-xl h-[35px] whitespace-nowrap rounded-md border border-purple-200 bg-gradient-to-l from-purple-500 to-pink-500 hover:bg-gradient-to-l";
  const button_send_style =
    "text-white text-xl h-[35px] whitespace-nowrap rounded-md border border-purple-200 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl";
  const file_attach_background_style =
    "flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 py-4";
  const close_button_style =
    "fixed -right-3 top-1 box-content border-none text-black hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none z-49";

  const ModalContainerLeft = (
    <div id="modal_container_left">
      <h2 className={modal_label_style}>{t("text.modal.send.message")}</h2>

      <div className="relative mb-3">
        <input
          type="text"
          id="input_name"
          name="name"
          className={input_name_email_message_style}
          placeholder={t("text.modal.name")}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className={validation_error_message_style}>
            {formik.errors.name}
          </div>
        ) : null}
        <label
          id="input_name_placeholder"
          className={input_text_placeholder_style}
        >
          {t("text.modal.name")}
        </label>
      </div>
      <div className="relative mb-3">
        <input
          type="email"
          id="input_email"
          name="email"
          form="novalidate"
          className={input_name_email_message_style}
          placeholder={t("text.modal.email")}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <div className={validation_error_message_style}>
            {Array.isArray(formik.errors.email) ? (
              formik.errors.email.map((error, index) => (
                <span key={index}>
                  {error}
                  <br />
                </span>
              ))
            ) : (
              <span>{formik.errors.email}</span>
            )}
          </div>
        )}
        <label
          id="input_email_placeholder"
          className={input_text_placeholder_style}
        >
          {t("text.modal.email")}
        </label>
      </div>
      <div className="relative">
        <textarea
          id="input_message_area"
          name="message"
          className={input_name_email_message_style}
          placeholder={t("text.modal.message")}
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{ whiteSpace: "normal" }}
        />
        {formik.touched.message && formik.errors.message ? (
          <div className={validation_error_message_style}>
            {formik.errors.message}
          </div>
        ) : null}
        <label
          id="input_message_placeholder"
          className={input_text_placeholder_style}
        >
          {t("text.modal.message")}
        </label>
      </div>
    </div>
  );

  const ModalContainerRight = (
    <div id="modal_container_right">
      <div className="flex flex-col justify-between h-full ">
        <button
          id="button_close"
          type="submit"
          className={close_button_style}
          data-te-modal-dismiss
          aria-label="Close"
          onTouchStart={handleCancelClick}
          onClick={handleCancelClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            strokeWidth="1"
            stroke="currentColor"
            className="h-7 w-7 bg-white bg-transparent/20 rounded-[6px] opacity-50"
          >
            <path d="M5 15L15 5M5 5l10 10" className="cross-style " />
          </svg>
        </button>

        <div id="modal_container_right_file_title" className="">
          <h3 id="message_file_input" className={modal_label_style}>
            {t("text.modal.attach.photo")}
          </h3>
        </div>
        <div id="modal_container_right_file_input" className=" ">
          <div id="file_input_container" className="">
            <label
              id="dropzone-file-label"
              className={file_attach_background_style}
            >
              <div className="h-auto md:h-[180px] flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                  <svg
                    className="w-8 h-8 mb-1 text-gray-500 "
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
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">
                      {t("text.modal.click.upload.1")}
                    </span>
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
            <div className={validation_error_message_style}>
              {formik.errors.files}
            </div>
          ) : null}
        </div>
        <div id="modal_container_right_file_buttons">
          <div className="grid grid-cols-2 gap-2 pt-4 ">
            <button
              id="file_input_button_cancel"
              className={button_cancel_style}
              onTouchStart={handleCancelClick}
              onClick={handleCancelClick}
            >
              <p className="mt-[-5px]">{t("button.modal.cancel")}</p>
            </button>
            <button
              id="file_input_button_send"
              type="submit"
              className={button_send_style}
              onTouchStart={handleSendClick}
              onClick={handleSendClick}
            >
              <p className="mt-[-5px]">{t("button.modal.send")}</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  const modal1plus1Style =
    "flex flex-col justify-center items-between ssm:grid ssm:grid-cols-1 ssm:gap-4 ssm:justify-self-center ssm:max grid pt-5 pb-10 grid-cols-1 sm:grid-cols-2 gap-4 justify-self-center max-h-screen overflow-y-auto overflow-x-auto";
  const modalContainerStyle =
    "z-50 w-screen h-screen flex items-center justify-center shadow-2xl p-4 bg-white bg-opacity-10 backdrop-blur-[15px] fixed top-0 left-0 ";
  return (
    showModal && (
      <div data-te-modal-init id="modal_shadow" role="dialog" aria-modal="true">
        <div data-te-modal-dialog-ref>
          <div
            id="modal_container"
            style={style}
            className={modalContainerStyle}

          >
            <form onSubmit={formik.handleSubmit}>
              <div className={modal1plus1Style} data-te-modal-body-ref>
                {ModalContainerLeft}
                {ModalContainerRight}
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default NikolenkoTEBlockModal;
