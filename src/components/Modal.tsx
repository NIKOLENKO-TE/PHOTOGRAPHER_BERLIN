//Modal.tsx
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { Toaster, toast } from 'react-hot-toast';
import SiteContainerBackground from './sliders/SiteContainerBackground';
import emailjs from "@emailjs/browser";
import { getValidationSchema } from "./validationSchema";

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
  const [fileNames, setFileNames] = useState<{ name: string; icon: string; color: string; }[]>([]);
  const [submitCount, setSubmitCount] = useState(0);
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

  const [_files, setFiles] = useState<File[]>([]);
  const { t } = useTranslation("NikolenkoTEBlockModal");
  const validationSchema = getValidationSchema(t);
  const serviceID = "service_laehc3e";
  const templateID = "template_qadu4k2";
  const publicKey = "0up_r2n1CjMbq-05E";
  emailjs.init(publicKey);
  const input_name_email_style = "peer block min-h-[58px] h-full w-full rounded-md border border-solid border-neutral-300 bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]";
  const input_message_style = "peer block min-h-[120px] h-full w-full rounded-md border border-solid border-neutral-300 bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] overflow-hidden";
  const validation_error_message_style = "w-full px-2 pb-1 text-white mt-1 text-bold bg-red-600 bg-opacity-60 rounded-xl whitespace-wrap";
  const input_text_placeholder_style = "z-99 pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none ";
  const modal_label_style = "whitespace-nowrap text-white text-2xl px-3 pb-1 flex-nowrap mb-2 text-center bg-gradient-to-l from-cyan-500 to-blue-500 border border-purple-200 hover:bg-purple-600 rounded-xl";
  const button_cancel_style = "text-white text-xl h-[35px] whitespace-nowrap rounded-md border border-purple-200 bg-gradient-to-l from-purple-500 to-pink-500 hover:bg-gradient-to-l";
  const button_send_style = "text-white text-xl h-[35px] whitespace-nowrap rounded-md border border-purple-200 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl";
  const file_attach_background_style = "flex flex-col items-center justify-center  rounded-[12px] cursor-pointer bg-gray-50 py-6 ";
  const close_button_style = "fixed -right-3 top-1 box-content border-none text-black hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none z-49";
  const fileNamesContainerStyle = { fontSize: '18px', color: 'hsl(0, 0%, 100%)', textAlign: 'left', overflowX: 'hidden', whiteSpace: 'nowrap', overflowY: 'auto', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', };
  const modal1plus1Style = "flex flex-col justify-center items-between ssm:grid ssm:grid-cols-1 ssm:gap-4 md:gap-0 ssm:justify-self-center grid pt-5 pb-5 grid-cols-1 sm:grid-cols-2 gap-4 justify-self-center max-h-screen overflow-y-auto overflow-x-auto";
  const modalContainerStyle = "z-50 w-screen h-screen flex ssm:items-start md:items-center justify-center shadow-2xl p-4 bg-white bg-opacity-10 backdrop-blur-[15px] fixed top-0 left-0 ";
  const fileNameStyle = { display: 'block', };
  const handleRemoveFile = (event: React.MouseEvent, index: number) => {
    event.preventDefault();
    setFiles(_files => {
      const newFiles = _files.filter((_, fileIndex) => fileIndex !== index);
      formik.setFieldValue("files", newFiles);
      formik.validateField('files');
      return newFiles;
    });
    setFileNames(fileNames => fileNames.filter((_, fileNameIndex) => fileNameIndex !== index));
    if (Array.isArray(formik.errors.files)) {
      const newErrors = [...formik.errors.files];
      newErrors.splice(index, 1);
      formik.setErrors({ ...formik.errors, files: newErrors });
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
      files: [],
    },
    validateOnChange: false,
    validationSchema,
    onSubmit: async (values) => {
      setSubmitCount(submitCount + 1);
      const uploadPromises = _files.map((file) => {
        const formData = new FormData();
        formData.append("key", "9eea17ff2ebe097f4e4ada123b28e05d");
        formData.append("image", file);
        const uploadPromise = fetch("https://api.imgbb.com/1/upload", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => data.data.url)
          .catch((error) => {
            console.error("Error uploading image:", error);
            return null;
          });
        toast.promise(uploadPromise, {
          loading: t("validation.toast.form.uploading.image"),
          success: t("validation.toast.form.image.uploaded"),
          error: t("validation.toast.form.error.while.uploading.image"),
        });
        return uploadPromise;
      });
      const uploadedImageLinks = await Promise.all(uploadPromises);
      const imagesHtml = uploadedImageLinks
        .map((link) => `<img src="${link}" width="350">`)
        .join(" ");

      const templateParams = {
        to_name: "NikolenkoTE",
        from_name: values.name,
        from_email: values.email,
        message: values.message,
        photos_links: imagesHtml,
      };
      const sendEmailPromise = emailjs
        .send(serviceID, templateID, templateParams, publicKey)
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          formik.resetForm();
          toast.success(t("validation.toast.form.window.will.close"), {
            duration: 4500
          });
          return response;

        })
        .catch((error) => {
          console.error("FAILED...", error);
          toast.error(t("validation.toast.form.send.message"));
        });
      toast.promise(sendEmailPromise, {
        loading: t("validation.toast.form.sending.message"),
        success: t("validation.toast.form.message.sent.successfully"),
        error: t("validation.toast.form.send.message"),
      });
      await sendEmailPromise;
      setTimeout(() => {
        setShowModal(false);
      }, 5000);
    },
  });

  useEffect(() => {
    if (Object.keys(formik.errors).length > 0) {
      toast.error(t("validation.toast.form.check.entered.data"));
    }
  }, [formik.errors, t]);
  const handleCancelClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setShowModal(false);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedFiles = Array.from(event.target.files).slice(0, 10);
      const allowedTypes = [
        "image/png",
        "image/jpeg",
        "image/jpg",
        "image/bmp",
        "image/gif",
      ];
      const selectedFileNames = selectedFiles.map((file) => {
        return {
          name: file.name,
          icon: allowedTypes.includes(file.type) ? 'check' : 'cross',
          color: allowedTypes.includes(file.type) ? 'green' : 'red'
        };
      });
      setFiles([..._files, ...selectedFiles]);
      setFileNames([...fileNames, ...selectedFileNames]);
      formik.setFieldValue("files", [..._files, ...selectedFiles]);
      formik.validateField('files');
      formik.validateForm();
    }
  };

  const ModalContainerLeft = (
    <div id="modal_container_left" className="max-w-[400px] px-2">
      <h2 className={modal_label_style}>{t("text.modal.send.message")}</h2>
      <div className="relative mb-3" >
        <input
          type="text"
          id="input_name"
          name="name"
          className={input_name_email_style}
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
          className={input_name_email_style}
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
          className={input_message_style}
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
    <div id="modal_container_right" className="max-w-[400px]">
      <div className="flex flex-col justify-between h-full">
        <button
          id="button_close"
          type="submit"
          className={close_button_style}
          data-te-modal-dismiss
          aria-label="Close"
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
        <div id="modal_container_right_file_title" className="px-2">
          <h3 id="message_file_input" className={modal_label_style}>
            {t("text.modal.attach.photo")}
          </h3>
        </div>
        <div id="modal_container_right_file_input" className="">
          <SiteContainerBackground>
            <div id="file_input_container" className="">
              <label
                id="dropzone-file"
                className={file_attach_background_style}
              >
                <div className="h-full flex flex-col">
                  <div className="flex flex-col items-center justify-center p-2">
                    <svg
                      className="w-12  mb-1 text-gray-500 "
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
            </div></SiteContainerBackground>
          {fileNames.length > 0 && (
            <SiteContainerBackground>
              <div id="file_input_files_names" style={fileNamesContainerStyle as React.CSSProperties} className="pb-1">
                <ul>
                  {fileNames.map((file, index) => (
                    <li key={index}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', maxWidth: '90%' }}>
                          <div style={{ background: 'none', border: 'none', padding: 0, margin: 0 }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 inline-block" viewBox="0 0 20 20">
                              {file.icon === 'check' ? (
                                <>
                                  <path fill="white" d="M10 18a8 8 0 100-16 8 8 0 000 16z" />
                                  <path fill="#00D000" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </>
                              ) : (
                                <>
                                  <path fill="#ff9540" d="M10 18a8 8 0 100-16 8 8 0 000 16z" />
                                  <path fill="white" d="M11 5a1 1 0 10-2 0v6a1 1 0 102 0V5zm-1 10a1 1 0 100-2 1 1 0 000 2z" />
                                </>
                              )}
                            </svg>
                          </div>
                          <span style={{ ...fileNameStyle, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {file.name}
                          </span>
                        </div>
                        <button style={{ background: 'none', border: 'none', padding: 0, margin: 0 }} onClick={(event) => handleRemoveFile(event, index)}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 inline-block" viewBox="0 0 20 20">
                            <circle cx="10" cy="10" r="8" fill="rgb(250,0,0)" />
                            <text x="50%" y="55%" textAnchor="middle" alignmentBaseline="middle" fontSize="30" fill="white">-</text>
                          </svg>
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </SiteContainerBackground>
          )}
          {formik.touched.files && formik.errors.files ? (
            <div className={validation_error_message_style}>
              {formik.errors.files}
            </div>
          ) : null}
        </div>
        <div id="modal_container_right_file_buttons">
          <div className="grid grid-cols-2 gap-2 pt-2 pb-10 px-2">
            <button
              id="file_input_button_cancel"
              className={button_cancel_style}
              onClick={handleCancelClick}
            >
              <p className="mt-[-5px]">{t("button.modal.cancel")}</p>
            </button>
            <button
              id="file_input_button_send"
              type="submit"
              className={button_send_style}
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
      <div data-te-modal-init id="modal_shadow" role="dialog" aria-modal="true" >
        <Toaster />
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
