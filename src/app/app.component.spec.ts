import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { By } from '@angular/platform-browser';

fdescribe('AppComponent', () => {

  // se crear un fixture del componente
  // El ComponenetFixture nos permite acceder a todas las propiedades de la clase
  let fixture: ComponentFixture<AppComponent>;

  // variable del componete a probar
  let component = AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  // Antes de cada una de las pruebas se debe cargar el componente a utilizar
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('Should have a router oulet', () => {
    const de = fixture.debugElement.query(By.directive(RouterOutlet));

    expect(de).not.toBeNull();

  });




});
