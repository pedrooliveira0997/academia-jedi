import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({name: 'sexo'})

export class SexoPipe implements PipeTransform {
        transform(value: string): string {
            if (value == 'masculino') {
                return 'm';
            }
    
            if (value == 'feminino') {
                return 'f';
            }

            return value
        }
}