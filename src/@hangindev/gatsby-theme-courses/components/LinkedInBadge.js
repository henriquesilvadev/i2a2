import React from 'react';

function LinkedInBadge() {
  return (
    <>
      <script
        type="text/javascript"
        src="https://platform.linkedin.com/badges/js/profile.js"
        async
        defer
      ></script>
      <link rel="stylesheet" href="https://static-exp1.licdn.com/sc/h/26f5pbit9h0pixa2dulie5rse"></link>
      <div
        className="LI-profile-badge"
        dataVersion="v1"
        dataSize="medium"
        dataLocale="pt_BR"
        dataType="vertical"
        dataTheme="dark"
        dataVanity="hhdasilva"
      >
        <a
          className="LI-simple-link"
          href="https://br.linkedin.com/in/hhdasilva?trk=profile-badge"
        >
          Henrique Silva
        </a>
      </div>
    </>
  );
}
export default LinkedInBadge;
