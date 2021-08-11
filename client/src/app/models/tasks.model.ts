export default interface TasksModel{
    desc:string,
    created:Date,
    worker:{
        _id:string,
        name:string,
        desc:string,
        nick:string,
        color:string,
    }
    ,
    _id:string
}