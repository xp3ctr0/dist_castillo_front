import Swal from 'sweetalert2'

export function triggerMesaage(icon: string, message: string) {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast: any) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });

  // @ts-ignore
  Toast.fire({
    icon: icon,
    title: message
  });
}
