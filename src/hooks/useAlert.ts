import Swal from "sweetalert2";

export default function useAlert() {
	const warning = (title: string, message: string) => {
		Swal.fire({
			title: title,
			html: `<p style="color:red">${message}</p>`,
			icon: "warning",
			confirmButtonText: "Ok",
		});
	};
	return { warning };
}
