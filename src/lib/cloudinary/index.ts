import { env } from '$env/dynamic/private';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
	cloud_name: env.CLOUDINARY_CLOUD_NAME,
	api_key: env.CLOUDINARY_API_KEY,
	api_secret: env.CLOUDINARY_API_SECRET
});

export const uploadFile = async (file: string, name: string) => {
	try {
		const response = await cloudinary.uploader.upload(file, {
			public_id: name,
			overwrite: true,
			resource_type: 'image',
			folder: env.CLOUDINARY_MAIN_FOLDER,
			access_mode: 'public',
			use_filename: true
		});
		return response.secure_url;
	} catch (error) {
		console.error(error);
	}
};
