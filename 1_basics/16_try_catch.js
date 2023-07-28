/**
 * try...catch
 * 
 * 1) 발생시킬 때 -> 던진다고한다. (throw)
 * 2) 명시적으로 인지할 때 -> 잡는다고한다. (catch)
 */
function runner(){
    try{
    console.log('Hello');

    throw new Error('비사앙!');

    console.log('BS');
    }catch(e){
        console.log('---catch---');
        console.log(e);
    }finally {
        console.log('---finally---')
    }
}
runner();

//finally 무조건 실행!