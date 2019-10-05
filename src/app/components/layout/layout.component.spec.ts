import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LayoutComponent } from "./layout.component";
import { MatBottomSheet } from "@angular/material";
import { RouterTestingModule } from "@angular/router/testing";
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ActionsComponent } from "../actions/actions.component";

class MatBottomSheetStub {
  open() {}
}

fdescribe("LayoutComponent", () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutComponent],
      providers: [{ provide: MatBottomSheet, useClass: MatBottomSheetStub }],
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: "",
            component: LayoutComponent
          },
          {
            path: "app/add",
            component: LayoutComponent
          }
        ])
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Should set the editMode to false", () => {
    const verifyEditMode = spyOn(component, "verifyEditMode").and.callThrough();

    fixture.ngZone.run(() => {
      (<any>component).router.navigate(["/"]);

      fixture.whenStable().then(() => {
        // Esperamos que la veriable editMode sea falso
        expect(component.editMode).toBeFalsy();
        // esperamos que la funcion verifyEditMode sea llamada
        expect(verifyEditMode).toHaveBeenCalled();
      });
    });
  });

  it("Should open", () => {
    const open = spyOn((<any>component).bottomSheet, "open");

    component.openBottomSheet();

    expect(open).toHaveBeenCalledWith(ActionsComponent);
  });

  it("Should set the editMode to true", () => {
    fixture.ngZone.run(() => {
      (<any>component).router.navigate(["app/add"]);

      fixture.whenStable().then(() => {
        // Esperamos que la veriable editMode sea verdadera
        expect(component.editMode).toBeTruthy();
      });
    });
  });
});
