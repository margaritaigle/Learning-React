import { usContext } from "../base-pruebas/06-deses-obj";

test('usContext debe retornar un objeto', () => {
    const persona1 = {
        clave: 456,
        edad: 23,
    };
    const usuario = usContext(persona1);
   
    expect(usuario).toEqual({
        nombreClave: usuario.nombreClave,
        anios: usuario.anios,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    });

});
