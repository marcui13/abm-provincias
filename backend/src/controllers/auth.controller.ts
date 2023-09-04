import { post, requestBody } from "@loopback/rest";
import { User } from "../models/user.model";
import { MOCK_USUARIOS } from "../mock-data/mockup-user";
import * as jwt from "jsonwebtoken"; // Importa la librería jsonwebtoken

export class AuthController {
  @post("/login")
  async login(@requestBody() credentials: User): Promise<{ token: string }> {
    // Verifica las credenciales del usuario (en un entorno de producción, consulta la base de datos)
    const user = MOCK_USUARIOS.usuarios.find(
      (u) =>
        u.username === credentials.username &&
        u.password === credentials.password
    );

    if (!user) {
      throw new Error("Credenciales inválidas");
    }

    // Genera un token JWT
    const token = this.generateToken(user);

    // Devuelve el token al cliente
    return { token };
  }

  // Función para generar un token JWT
  generateToken(user: User | any): string {
    // Define la información que deseas incluir en el token
    const tokenData = {
      id: user.id,
      username: user.username,
      // Puedes incluir otros datos aquí según tus necesidades
    };

    // Firma el token utilizando una clave secreta (deberías configurar esto en tu entorno)
    const secretKey = "TuClaveSecreta"; // Cambia esto por tu clave secreta real

    // Genera el token con jsonwebtoken
    const token = jwt.sign(tokenData, secretKey, {
      expiresIn: "1h", // Configura la expiración del token según tus necesidades
    });

    return token;
  }
}
