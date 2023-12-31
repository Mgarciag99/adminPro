import { environment } from "src/environments/environments";

const base_url = environment.base_url;

export class User{
    constructor(
        public name: string,
        public email: string,
        public google: boolean,
        public password?: string,
        public img?: string,
        public role?: string,
        public uid?: string 
    ){
    }

    get imageUrl(){
        if( this.img?.includes('https') ){
            return this.img;
        } 
        if( this.img ){
            return `${ base_url }/upload/users/${ this.img }`
        }else{
            return `${ base_url }/upload/users/no-image`
        }
    }
}