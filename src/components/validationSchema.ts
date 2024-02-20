import * as Yup from "yup";
export const getValidationSchema = (t: any) => Yup.object({
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

