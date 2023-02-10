import useFetchProductsCount from "../hooks/useFetchProductsCount";

export default function ProductsCount() {
  const [count, fetchProductsCount = setShouldFetch] = useFetchProductsCount();

  return (
    <div className="panel">
      <h1 className="panel-heading">Products count</h1>
      <div className="p-4">
        <p>
          This is a simple component, that fetches the products count from a
          store.
        </p>
        {count && (
          <>
            <br />
            <p>
              Products in store are: <strong>{count}</strong>
            </p>
          </>
        )}
        <div className="field mt-4">
          <div className="control">
            <button className="button" onClick={() => fetchProductsCount(true)}>
              Get count
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
