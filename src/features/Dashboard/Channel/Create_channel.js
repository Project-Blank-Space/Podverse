import { useFormik } from "formik";
import * as Yup from "yup";
// import { dynamicFileName } from "utils/base64toimage";
import { Preview } from "../../../utils/Imagepreview";

const Create_channel = () => {

    const { previewImage, hiddenFileInput, handleClick } = Preview()

    const formik = useFormik({
        initialValues: {
            name: "",
            desc: "",
            file: "",
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required("* Name is required"),
            desc: Yup.string().required("* Name is required"),
            file: Yup.mixed()
                .required("* Image required")
                .test(
                    "fileFormat",
                    "Unsupported file format",
                    (value) =>
                        value &&
                        ["image/jpeg", "image/png"].includes(value.type)
                )
                .test(
                    "fileSize",
                    "File size is too large",
                    (value) => value && value.size <= 1000000 // 1 MB
                ),
        }),
        onSubmit: async (values) => {
            console.log(values)
        },
    });

    return (
        <div className="">
            <form className="flex gap-3 drop-shadow-lg bg-white rounded-md" onSubmit={formik.handleSubmit}>

                <div className="flex justify-center mt-10">
                    <div className="">
                        <div className="preview">
                            <img
                                className="hidden w-[20vw] h-[20vh] p-2 border-solid border-2 border-[#023047] rounded-md"
                                id="preview-selected-image"
                                alt="preview-of-car"
                            />
                        </div>
                        <input
                            ref={hiddenFileInput}
                            id="file-upload"
                            name="file"
                            className="hidden"
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                                previewImage(e);
                                formik.setFieldValue("file", e.currentTarget.files[0]);
                            }}
                        />
                    </div>
                </div>

                {formik.touched.file && formik.errors.file ? (
                    <div className="flex justify-center mr-40  text-red-500 text-xs -mt-2">
                        {formik.errors.file}
                    </div>
                ) : (
                    <div className="error-box -mt-2"></div>
                )}

                <div className="justify-center flex mt-1">
                    <div
                        onClick={handleClick}
                        className="flex gap-2 justify-center btn-md cursor-pointer btn-primary w-fit"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                            />
                        </svg>
                        Upload Images from gallery
                    </div>
                </div>

                <div className="flex flex-col gap-4 w-full">

                    <div className="font-normal text-sm grid grid-cols-2 items-center w-full">
                        <input
                            className="w-12 h-8"
                            type="desc"
                            name="desc"
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam justo at ipsum efficitur, non iaculis velit viverra. Proin auctor odio eget lectus imperdiet, in pulvinar mauris cursus. Aliquam sed est vel mauris dignissim auctor id id augue. Nunc eget nulla ac dolor placerat pretium a id quam. Sed eu purus euismod, mollis velit eu, vestibulum augue. Fusce vel nibh ultrices, eleifend lorem ut, luctus nulla. Duis eget vestibulum sapien, nec tristique augue. In ac lacinia nunc, "
                            value={formik.values.desc}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.desc && formik.errors.desc ? (
                            <div className="text-red-500 text-xs col-start-2 mt-1">
                                {formik.errors.desc}
                            </div>
                        ) : (
                            <div className="text-red-500 text-xs col-start-2 mt-1 w-full h-4"></div>
                        )}
                    </div>

                    <div className="flex jusitfy-between">
                        <div className="font-normal text-sm grid grid-cols-2 items-center w-full">
                            <input
                                className="w-12 h-8 text-xl"
                                type="name"
                                name="name"
                                placeholder="CHANNEL NAME"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.name && formik.errors.name ? (
                                <div className="text-red-500 text-xs col-start-2 mt-1">
                                    {formik.errors.name}
                                </div>
                            ) : (
                                <div className="text-red-500 text-xs col-start-2 mt-1 w-full h-4"></div>
                            )}
                        </div>

                        <button className="group" type="submit" value="submit">
                            <div className="flex flex-row gap-3 justify-center items-center px-2">
                                <svg
                                    className="group-hover:stroke-current stroke-current hover:text-green-800"
                                    width="40"
                                    height="40"
                                    viewBox="0 0 17 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5 7.79297L8 10.293L12 5.29297M8.5 14.793C7.58075 14.793 6.6705 14.6119 5.82122 14.2601C4.97194 13.9083 4.20026 13.3927 3.55025 12.7427C2.90024 12.0927 2.38463 11.321 2.03284 10.4718C1.68106 9.62247 1.5 8.71222 1.5 7.79297C1.5 6.87372 1.68106 5.96346 2.03284 5.11418C2.38463 4.26491 2.90024 3.49323 3.55025 2.84322C4.20026 2.19321 4.97194 1.67759 5.82122 1.32581C6.6705 0.974029 7.58075 0.792969 8.5 0.792969C10.3565 0.792969 12.137 1.53047 13.4497 2.84322C14.7625 4.15598 15.5 5.93645 15.5 7.79297C15.5 9.64948 14.7625 11.43 13.4497 12.7427C12.137 14.0555 10.3565 14.793 8.5 14.793Z"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </div>
                        </button>

                    </div>

                </div>
            </form>

            <div>No Episodes uploaded</div>
        </div>
    );
};

export default Create_channel;
