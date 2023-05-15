import React from "react";
import sanitize from "sanitize-html";

export default ({ html = "" }) => {
  const sanitized = sanitize(html);
  return <p className="checking mb-0" dangerouslySetInnerHTML={{ __html: sanitized }} />;
};
