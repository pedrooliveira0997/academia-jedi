import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({name: 'sexo'})

export class SexoPipe implements PipeTransform {
        transform(value: string): string {
            if (value == 'Masculino') {
                return 'M';
            }
    
            if (value == 'Feminino') {
                return 'F';
            }

            return value
        }
}