import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-crear-produtco',
  templateUrl: './crear-produtco.component.html',
  styleUrls: ['./crear-produtco.component.css']
})
export class CrearProdutcoComponent implements OnInit {

  productoForm: FormGroup;
  titulo= 'Crear producto';
  id: string | null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _productoService: ProductoService,
              private aRouter: ActivatedRoute) { 
    this.productoForm = this.fb.group({
      producto:['', Validators.required],
      categoria:['', Validators.required],
      ubicacion:['', Validators.required],
      precio:['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarProducto(){
    console.log(this.productoForm)

    console.log(this.productoForm.get('producto')?.value)

    const PRODUCTO: Producto = {
      nombre: this.productoForm.get('producto')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      ubicacion: this.productoForm.get('ubicacion')?.value,
      precio: this.productoForm.get('precio')?.value,
    }

    if(this.id !== null){
      //Editar

        this._productoService.editarPriducto(this.id, PRODUCTO).subscribe(data=>{
          this.toastr.info('El producto fue actualizado con exito', 'Producto Actualizado!');
          this.router.navigate(['/']);
        }, error =>{
          this.toastr.error('El producto no pudo ser actualizado.', 'Error');
          this.productoForm.reset();
        })

    }else{
      //Nuevo

      console.log(PRODUCTO);
      this._productoService.guardarProducto(PRODUCTO).subscribe(data =>{
        this.toastr.success('El producto fue registrado con exito', 'Producto Registrado!');
        this.router.navigate(['/']);
      }, error =>{
        this.toastr.error('El producto no pudo ser agregado.', 'Error');
        this.productoForm.reset();
      })

    }

    
  }
esEditar(){
  if (this.id !== null){
    this.titulo= 'Editar producto';
    this._productoService.obtenerProducto(this.id).subscribe(data =>{
      this.productoForm.setValue({
        producto: data.nombre,
        categoria: data.categoria,
        ubicacion: data.ubicacion,
        precio: data.precio,
      })
    })
  }
}
}
