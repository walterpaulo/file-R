import Swal from 'sweetalert2'
import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="sweetalert"
export default class extends Controller {

  static values = { title: String }

  connect() {
    this.redirect = false;
  }
  showAlert(event){
    if (this.redirect) return;

    event.stopImmediatePropagation();
    event.preventDefault();
    Swal.fire({
      title: this.titleValue,
      showDenyButton: true,
      showConfirmButton: false,
      showCancelButton: true,
      denyButtonText: 'Sim',
      cancelButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isDenied) {
        this.redirect = true
        this.element.click();
      }
    })
  }
}
