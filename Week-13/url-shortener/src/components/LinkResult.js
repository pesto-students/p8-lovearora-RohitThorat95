import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

import "./LinkResult.css";

const LinkResult = (props) => {
  let { inputValue } = props;
  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      setShortenLink(res.data.result.full_short_link);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inputValue && inputValue.length) {
      fetchData();
    }
  }, [inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [copied]);

  if (loading) {
    return <p className="noData">Loading...</p>;
  }

  if (error) {
    return <p className="noData">Something went wrong.</p>;
  }

  return (
    <Fragment>
      {shortenLink ? (
        <div className="result">
          <p>{inputValue}</p>
          <p>{shortenLink}</p>
          <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
            <button className={copied ? "copied" : ""}>COPY</button>
          </CopyToClipboard>
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default LinkResult;
