
app.get("/",(req,res)=>{
    try {
        if(res){
            res.send({
                success:true;
            })
        }
    } catch (error) {
        console.log(error.message);
    }
})