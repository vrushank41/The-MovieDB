export interface Trending{
    results:{
        id:number,
        title:string,
        poster_path:string,
        overview:string,
        release_date:string
    }[]
}

export interface MovieID{
    title:string,
    homepage:string,
    original_language:string,
    overview:string,
    release_date:string,
    backdrop_path:string
}