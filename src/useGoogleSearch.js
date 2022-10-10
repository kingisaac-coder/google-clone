import { useEffect, useState } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "554af92644fea451d";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };

    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;

//<script async src="https://cse.google.com/cse.js?cx=6175c83dbebad4d6e">
// </script>

// <script async src="https://cse.google.com/cse.js?//cx=554af92644fea451d">
//</script>
//<div class="gcse-search"></div> */
