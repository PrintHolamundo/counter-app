const getResult =  function(a,b) {
    return a + b;
}

export const FirstApp = () => {
    return (
        <>
            <h1>{ getResult(1,2) }</h1>
            <p>Soy un subtitulo</p>
        </>
    );
}
