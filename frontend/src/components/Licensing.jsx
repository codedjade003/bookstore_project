import React from "react";

const Licensing = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Licensing (Apache 2.0)</h1>
      
      <p className="mb-4">
        Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
        You may obtain a copy of the License at:
      </p>
      
      <p className="mb-4">
        <a 
          href="http://www.apache.org/licenses/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:underline"
        >
          http://www.apache.org/licenses/
        </a>
      </p>
      
      <p className="mb-4">
        Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS,
        WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
      </p>
      
      <p className="text-gray-500 text-sm">Last updated: January 1, 2023</p>
    </div>
  );
};

export default Licensing;
