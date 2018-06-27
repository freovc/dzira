import { FormGroup } from '@angular/forms';

export class FormHelper {
  constructor(private formGroup: FormGroup) {}

  controlInvalid(fieldName: string): boolean {
    return controlInvalid(this.formGroup, fieldName);
  }

  extractFormErrors() {
    return extractFormErrors(this.formGroup);
  }

  readFileAsArrayBuffer(
    input: HTMLInputElement,
  ): Promise<{ filename: string; filetype: string; value: ArrayBuffer }> {
    return readFileAsArrayBuffer(input);
  }

  readFileAsDataURL(
    input: HTMLInputElement,
  ): Promise<{ filename: string; filetype: string; value: ArrayBuffer }> {
    return readFileAsDataURL(input);
  }

  markAllControlsAsDirtyAndTouched(): void {
    markAllControlsAsDirtyAndTouched(this.formGroup);
  }
}

export function markAllControlsAsDirtyAndTouched(fg: FormGroup) {
  const controls = Object.keys(fg.controls);
  controls.forEach(control => {
    fg.get(control).markAsDirty();
    fg.get(control).markAsTouched();
  });
}

export function controlInvalid(fg: FormGroup, fieldName: string) {
  const { invalid, touched } = fg.get(fieldName);
  return invalid && touched;
}

export function extractFormErrors(fg: FormGroup): string[] {
  const errorMsgs = [];
  const controls = Object.keys(fg.controls);
  controls.forEach(control => {
    let controlErrors = fg.controls[control].errors;
    if (controlErrors) {
      Object.keys(controlErrors).forEach(controlError => {
        errorMsgs.push(`Field ${control}: ${controlError}`);
      });
    }
  });
  return errorMsgs;
}

export function readFileAsArrayBuffer(
  input: HTMLInputElement,
): Promise<{ filename: string; filetype: string; value: ArrayBuffer }> {
  return new Promise((res, rej) => {
    let reader = new FileReader();
    if (input.files && input.files.length > 0) {
      let file = input.files[0];
      reader.readAsArrayBuffer(file);
      reader.onload = () =>
        res({
          filename: file.name,
          filetype: file.type,
          value: reader.result,
        });
    }
  });
}

export function readFileAsDataURL(
  input: HTMLInputElement,
): Promise<{ filename: string; filetype: string; value: ArrayBuffer }> {
  return new Promise((res, rej) => {
    let reader = new FileReader();
    if (input.files && input.files.length > 0) {
      let file = input.files[0];
      reader.readAsDataURL(file);
      reader.onload = () =>
        res({
          filename: file.name,
          filetype: file.type,
          value: reader.result,
        });
    }
  });
}
