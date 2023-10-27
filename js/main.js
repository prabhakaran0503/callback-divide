let a,b,c
function operation(num1,num2,Divide_pass_this){
    let ans=num1/num2
    Divide_pass_this(ans)

}
operation(100,2,dived=>{
    a=dived
    console.log(a);
    operation(a,5,dived=>{
        b=dived
        console.log(b);
        operation(b,2,dived=>{
            c=dived
            console.log(c);
        })
    })
});