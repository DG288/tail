function n() {
    const jefe = {
        marca: "volkswagen",
        mostrarmarca:function (){
            console.log("esta marca es",this.marca);
        }
    }
    
    jefe.mostrarmarca();
    return(
        <p></p>
    );
}
export default n;