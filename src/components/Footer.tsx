import { GitHub, LinkedIn } from "@mui/icons-material";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 text-white bg-gray-900 bg-opacity-40">
      <div className="px-4 mx-auto text-center max-w-7xl">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Syntax Spring. All rights reserved.
        </p>
        <div className="flex flex-row items-center justify-center w-full gap-4 mt-4 space-x-4">
          <a
            href="https://github.com/AfuhFlynns/syntax_spring_frontned"
            target="_blank"
            className="flex flex-col items-center justify-center w-auto h-auto gap-4 text-white hover:text-blue-400"
          >
            <i className="flex flex-col items-center w-auto h-auto fab fa-github">
              <GitHub />
              <span>Github</span>
            </i>
          </a>
          <a
            href="https://www.linkedin.com/in/afuh-flynn-s-74289a268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            className="flex flex-col items-center justify-center w-auto h-auto gap-4 text-white hover:text-blue-700"
          >
            <i className="flex flex-col items-center w-auto h-auto fab fa-linkedin">
              <LinkedIn />
              <span>Linkedin</span>
            </i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
