import "./filter.css";
const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <div className="filter">
      
      <div className="filter-options">
        <div>
          <h2>Filtrar</h2>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">Todas</option>
            <option value="completed">Completas</option>
            <option value="incomplete">Incompletas</option>
          </select>
        </div>

        
        <div>
        <h2>Ordenar</h2>
        <button onClick={() => setSort("asc")}>Asc</button>
        <button onClick={() => setSort("desc")}>Desc</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
