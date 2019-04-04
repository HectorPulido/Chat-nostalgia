import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'search'
})

export class SearchPipe implements PipeTransform{
    public transform(value: any, args: string){
        if(!value)
        {
            return;
        }
        if(!args)
        {
            return value;
        }
        args = args.toLocaleLowerCase();
        return value.filter((item : any)=>{
            return JSON.stringify(item).toLocaleLowerCase().includes(args);
        });
    }

}

