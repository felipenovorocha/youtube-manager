import * as cd from 'child_process'
import { youtube } from '../constantes';

export const criarDiretorioOutput = () => {
    cd.execSync(`mkdir ${youtube.DIRETORIO_OUTPUT}`, { cwd: ".." });
  };
  