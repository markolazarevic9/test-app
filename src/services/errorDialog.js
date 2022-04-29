import Swal from 'sweetalert2'


export const errorDialog = (html) => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        html: html,
      })
}