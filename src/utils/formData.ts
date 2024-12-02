// formData.ts

class FormDataBuilder {
    private isBrowser(): boolean {
      return typeof window !== 'undefined';
    }
  
    buildFormData(formData: FormData, data: any, parentKey?: any) {
      if (typeof data === 'function') {
        data(formData, parentKey);
        return;
      }
  
      if (data && typeof data === 'object' && !(data instanceof Date) && !(this.isBrowser() && data instanceof File)) {
        Object.keys(data).forEach((key: string) => {
          this.buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
        });
      } else {
        const value = data == null ? '' : data;
        console.log('parentKey: ', parentKey)
        formData.append(parentKey, value);
      }
    }
  }
  
  export default FormDataBuilder;
  