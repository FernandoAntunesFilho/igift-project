import React from 'react';
import providers from '../config/source';

class FilterCategories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      valor: 90,
    }
  }

  updateState(type, value) {
    if (type === 'range') {
      this.setState({
        valor: value,
      })
    }
  }

  render() {
    const { valor } = this.state;
    const cidades = [''];
    const categorias = [];

    for (let i = 0; i < providers.length; i += 1) {
      const provider = providers[i];
      cidades.push(provider.endereco.cidade);
      categorias.push(provider.categoria);
    }

    const cidadesUnicas = cidades.filter((cidade, i) => cidades.indexOf(cidade) === i);
    const categoriasUnicas = categorias.filter((categoria, i) => categorias.indexOf(categoria) === i);

    cidadesUnicas.sort();
    categoriasUnicas.sort();

    return(
      <div className='filter-itens'>
        <p>Filter</p>
        <p>Categories</p>
        
        <label htmlFor='cidades'>Selecione uma cidade
          <select name='cidades'>
            {cidadesUnicas.map((cidade, id) =>
              <option key={id} value={cidade}>
                {cidade}
              </option>)}
          </select>
        </label>

        <input
          value={valor}
          type='range'
          min='0'
          max='500'
          step='10'
          list='tickmarks'
          onChange={(event) => this.updateState(event.target.type, event.target.value)}
        />
        <p>R$ {valor},00</p>
        {/* <input type='range' list='tickmarks' /> */}
        {/* <datalist id='tickmarks'>
          <option value='1' label='R$ 1' />
          <option value='250' label='R$ 250' />
          <option value='500' label='R$ 500' />
        </datalist> */}

        {categoriasUnicas.map((categoria, id) => (
          <label key={id}>
            <input type='checkbox' />
            {categoria}
          </label>
        ))}
      </div>
    )
  }
}

export default FilterCategories;
