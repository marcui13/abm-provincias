import { post, requestBody } from "@loopback/rest";
import { User } from "../models/user.model";
import { MOCK_USUARIOS } from "../mock-data/mockup-user";
import * as jwt from "jsonwebtoken";

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

    const token = this.generateToken(user);

    return { token };
  }

  generateToken(user: User | any): string {
    const tokenData = {
      id: user.id,
      username: user.username,
    };

    const secretKey = "TuClaveSecreta"; // Cambiar esto por clave secreta real

    const token = jwt.sign(tokenData, secretKey, {
      expiresIn: "1h",
    });

    return token;
  }
}
