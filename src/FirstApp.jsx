const getResult =  function(a,b) {
    return a + b;
}

export const FirstApp = ({title , subTitle}) => {

    return (
        <>
            <h1>{ title }</h1>
            <p>{ subTitle }</p>
        </>
    );
}
