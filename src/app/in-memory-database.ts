import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Categoria } from './pages/categorias/compartilhado/categoria-model';


export class InMemoryDatabase implements InMemoryDbService {
  createDb() {
    const categorias: Categoria[] = [
      { id: 1, nome: 'Lazer', descricao: 'Praia, Cinema, Teatro' },
      { id: 2, nome: 'Pagamento', descricao: 'Conta, Mais contas, E mais contas' },
      { id: 3, nome: 'Trabalho', descricao: 'Fazer software, Arrumar casa, consertar máquina' },
      { id: 4, nome: 'Casa', descricao: 'Comprar móveis, Comprar copos, Lavar tapete' },
      { id: 5, nome: 'Estudo', descricao: 'Cursos, Mais cursos, E mais cursos ainda' },
    ];

    return { categorias };
  }
}
