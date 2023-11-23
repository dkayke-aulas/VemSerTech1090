import { Aluguel } from "./Models/aluguel";
import { Cliente } from "./Models/cliente";
import { Veiculo } from "./Models/veiculo";

const veiculos: Veiculo[] = []
const clientes: Cliente[] = []
const alugueis: Aluguel[] = []

const cliente = new Cliente('123456789', 'A')
const veiculo = new Veiculo('123-abcd', false, 10)

veiculos.push(veiculo)
clientes.push(cliente)