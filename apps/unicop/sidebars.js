/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],

  // But you can create a sidebar manually
  typescriptSidebar: [
    {
      type: 'category',
      label: 'JS eco-system',
      items: [
        {
          // type: 'doc',
          type: 'category',
          // id: 'js-es/index',
          label: 'Introduction ✨',
          link: { id: 'js-es/index', type: 'doc' },
          items: [],
          // items: [
          //   {
          //     type: 'category', 
          //     label: 'TypeScript', 
          //     items: [
                // {
                //   type: 'doc',
                //   id: 'js-es/typescript/index',
                //   label: 'TypeScript Introduction ✨',
                // },
          //       {
          //         type: 'category',
          //         label: 'Fundamentals 🪢',
          //         collapsed: true,
          //         collapsible: true,
          //         link: { 
          //           // slug: 'js-es/glossary',
          //           type: 'doc',
          //           id: 'js-es/glossary/index', 
          //           // title: 'TypeScript Fundamentals 📚',
          //           // description: "All fundamental terms that simplify TypeScript!",
          //           // keywords: ['guides'], 
          //         },
          //         // link: { type: 'doc', id: 'js-es/glossary/index' },
          //         items: [
          //           // 'js-es/glossary/index',
          //           { type: 'doc', id: 'js-es/glossary/compiler-vs-transpiler', label: 'Compiler Vs. Transpiler 📜' },
          //           { type: 'doc', id: 'js-es/glossary/js-module-systems-compatibility' },
          //           { type: 'doc', id: 'js-es/glossary/javascript-module-systems-explained' },
          //           { type: 'doc', id: 'js-es/glossary/bundlers-and-the-isomorphic-code-confusion', label: 'Isomorphic Code Confusion 🔮' },
          //           { type: 'doc', id: 'js-es/glossary/incremental-vs-naive-build' },
          //         ]
          //       },
          //       {
          //         type: 'category',
          //         label: 'Optimizations ⚡️',
          //         link: { 
          //           // slug: 'js-es/typescript/optimizations',
          //           // title: 'TypeScript Optimizations ⚡️',
          //           id: 'js-es/typescript/optimizations/index',
          //           type: 'doc',
          //           // description: `As the TypeScript eco-system becomes more mature, and many TypeScript projects gets bigger, especially in the monorepo era, Optimizations for your TypeScript project becomes more relevant than ever.
          //           // All the articles here unlock you crucial optimization that can be made for your project.`
          //         },
          //         items: [
          //           // { type: 'doc', id: 'js-es/typescript/optimizations/index', label: 'Introduction ✨'},
          //           { type: 'doc', id: 'js-es/typescript/optimizations/incremental-builds', label: 'TS Incremental builds 🧱' },
          //           { type: 'doc', id: 'js-es/typescript/optimizations/project-references-explained/index', label: 'Project References 🧬' },
          //           { type: 'doc', id: 'js-es/typescript/optimizations/import-helpers-with-tslib', label: 'Import Helpers 🧿' },
          //         ]
          //       },
          //       {
          //         type: 'category',
          //         label: 'Common Bugs Solved 🐞',
          //         link: { type: 'doc', id: 'js-es/typescript/bugs-solved/index' },
          //         items: [
          //           {
          //             id: 'js-es/typescript/bugs-solved/typescript-jest-cannot-use-import-statement-outside-module',
          //             type: 'doc',
          //             label: 'ts-jest: "Cannot use import statement outside module" 🤡'
          //           }
          //         ]
          //       }
          //     ] 
          //   },
          // ]
        },
        {
          type: 'category',
          label: 'Glossary 🪢',
          collapsed: true,
          collapsible: true,
          link: { 
            // slug: 'js-es/glossary',
            type: 'doc',
            id: 'js-es/glossary/index', 
            // title: 'TypeScript Fundamentals 📚',
            // description: "All fundamental terms that simplify TypeScript!",
            // keywords: ['guides'], 
          },
          // link: { type: 'doc', id: 'js-es/glossary/index' },
          items: [
            // 'js-es/glossary/index',
            { type: 'doc', id: 'js-es/glossary/compiler', label: 'Compiler 🏷' },
            { type: 'doc', id: 'js-es/glossary/transpiler', label: 'Transpiler 🏷' },
            { type: 'doc', id: 'js-es/glossary/environment', label: 'Environment 🏷' },
            { type: 'doc', id: 'js-es/glossary/naive-build', label: 'Naive Build 🏷' },
            { type: 'doc', id: 'js-es/glossary/incremental-build', label: 'Incremental Build 🏷' },
            { type: 'doc', id: 'js-es/glossary/modules/modules-compatibility', label: 'JavaScript Modules Compatibility' },
            { type: 'category', label: 'Modules 🧩', items: [
              { type: 'doc', id: 'js-es/glossary/modules/summary', label: 'Module Systems Summary' },
              { type: 'doc', id: 'js-es/glossary/modules/modules-compatibility', label: 'Environments Modules Compatibility 📊' },
              { type: 'doc', id: 'js-es/glossary/modules/esm', label: 'ES Module System 🏷' },
              { type: 'doc', id: 'js-es/glossary/modules/umd', label: 'UMD Module System 🏷' },
              { type: 'doc', id: 'js-es/glossary/modules/amd', label: 'AMD Module System 🏷' },
              { type: 'doc', id: 'js-es/glossary/modules/commonjs', label: 'CommonJS Module System 🏷' },
              { type: 'doc', id: 'js-es/glossary/modules/raw', label: 'Raw <script>  🏷' },
              { type: 'doc', id: 'js-es/glossary/modules/modules-bundler', label: 'Modules Bundler 🏷' },
              { type: 'doc', id: 'js-es/glossary/modules/nodejs-modules-support', label: 'Node.js - Modules 🏷' }
            ],  }
            // { type: 'doc', id: 'js-es/glossary/incremental-vs-naive-build' },
          ]
        },
        {
          type: 'category', 
          label: 'TypeScript', 
          link: {
            id: 'js-es/typescript/index',
            type: 'doc',
          },
          items: [
            // {
            //   type: 'doc',
            //   id: 'js-es/typescript/index',
            //   label: 'Introduction ✨',
            // },
            {
              type: 'category',
              label: 'Optimizations ⚡️',
              link: { 
                // slug: 'js-es/typescript/optimizations',
                // title: 'TypeScript Optimizations ⚡️',
                id: 'js-es/typescript/optimizations/index',
                type: 'doc',
                // description: `As the TypeScript eco-system becomes more mature, and many TypeScript projects gets bigger, especially in the monorepo era, Optimizations for your TypeScript project becomes more relevant than ever.
                // All the articles here unlock you crucial optimization that can be made for your project.`
              },
              items: [
                // { type: 'doc', id: 'js-es/typescript/optimizations/index', label: 'Introduction ✨'},
                { type: 'doc', id: 'js-es/typescript/optimizations/incremental-builds', label: 'TS Incremental builds 🧱' },
                { type: 'doc', id: 'js-es/typescript/optimizations/project-references-explained/index', label: 'Project References 🧬' },
                { type: 'doc', id: 'js-es/typescript/optimizations/import-helpers-with-tslib', label: 'Import Helpers 🧿' },
              ]
            },
            {
              type: 'category',
              label: 'Common Bugs Solved 🐞',
              link: { type: 'doc', id: 'js-es/typescript/bugs-solved/index' },
              items: [
                {
                  id: 'js-es/typescript/bugs-solved/typescript-jest-cannot-use-import-statement-outside-module',
                  type: 'doc',
                  label: 'ts-jest: "Cannot use import statement outside module" 🤡'
                }
              ]
            }
          ] 
        },
        {
          type: 'category',
          label: 'Testing Frameworks',
          // link: { id: 'js-es/testing-frameworks/index', type: 'doc'},
          items: [
            {
              type: 'category',
              label: 'Jest 🤡',
              link: { type: 'doc', id: 'js-es/testing-frameworks/jest/index' },
              items: [
                {
                  type: 'category',
                  label: 'Mocks 🃏',
                  link: {id: 'js-es/testing-frameworks/jest/mocks/index', type: 'doc' },
                  items: [
                    {
                      id: 'js-es/testing-frameworks/jest/mocks/jest-do-mock',
                      type: 'doc',
                      label: 'jest.doMock(🤡)'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'Jest Architecture Series 🏛',
                  // link: { id: 'js-es/testing-frameworks/jest/architecture/architecture-diagram', type: 'doc' },
                  link: { type: 'generated-index' , slug: 'js-es/testing-frameworks/jest/architecture' },
                  items: [
                    // {
                    //   type: 'doc',
                    //   id: 'js-es/testing-frameworks/jest/architecture/sharing-thoughts', 
                    //   label: 'Sharing Thoughts 🦉'
                    // },
                    {
                      type: 'doc',
                      id: 'js-es/testing-frameworks/jest/architecture/introduction', 
                      label: 'Introduction ✨'
                    },
                    {
                      type: 'doc',
                      id: 'js-es/testing-frameworks/jest/architecture/the-complete-architecture', 
                      label: 'The Complete Architecture Diagram 🏛'
                    },
                    {
                      type: 'doc',
                      id: 'js-es/testing-frameworks/jest/architecture/part-1-configs', 
                      label: 'P1: Configs 🧰'
                    },
                    {
                      type: 'doc',
                      id: 'js-es/testing-frameworks/jest/architecture/part-2-dependency-resolutions', 
                      label: 'P2: File System & Dependency Resolution 🌳'
                    },
                    {
                      type: 'doc',
                      id: 'js-es/testing-frameworks/jest/architecture/part-3-test-run-order', 
                      label: 'P3: Test Run Order (Optimizations) ⏳'
                    },
                    {
                      type: 'doc',
                      id: 'js-es/testing-frameworks/jest/architecture/part-4-test-run', 
                      label: 'P4: Test Run 🃏'
                    },
                    {
                      type: 'doc',
                      id: 'js-es/testing-frameworks/jest/architecture/part-5-the-runtime-environment', 
                      label: 'P5: The Runtime Environment 💽'
                    },
                    {
                      type: 'doc',
                      id: 'js-es/testing-frameworks/jest/architecture/part-6-modules-transformation', 
                      label: 'P6: Module Transformation 🦠'
                    },
                    {
                      type: 'doc',
                      id: 'js-es/testing-frameworks/jest/architecture/appendix-1-hoisting', 
                      label: 'Appx. Ⅰ: Jest Hoisting 🆙'
                    },
                    {
                      type: 'doc',
                      id: 'js-es/testing-frameworks/jest/architecture/appendix-2-jest-worker', 
                      label: 'Appx. Ⅱ: jest-worker 👷‍♂️'
                    },
                    {
                      type: 'doc',
                      id: 'js-es/testing-frameworks/jest/architecture/appendix-3-cache-summary', 
                      label: 'Appx. Ⅲ: Cache Summary 💵'
                    },
                    {
                      type: 'doc',
                      id: 'js-es/testing-frameworks/jest/architecture/appendix-4-reporters', 
                      label: 'Appx. Ⅳ: Test Result Summary 🧪'
                    },
                    {
                      type: 'doc',
                      id: 'js-es/testing-frameworks/jest/architecture/appendix-5-watch-mode', 
                      label: 'Appx. Ⅴ: Watch Mode ⏱'
                    },
                  ]
                }
              ]
            }
          ]
        }
      ],
    },
    {
      'type': 'category',
      label: 'Testing',
      items: [
        {
          type: 'category',
          label: 'Unit Tests',
          link: {
            id: 'testing/unit/index',
            type: 'doc',
          },
          items: [
            {
              type: 'category',
              label: 'Theory 🔭',
              link: { type: 'doc', id: 'testing/unit/theory/index' },
              items: [
                {
                  id: 'testing/unit/theory/pros',
                  type: 'doc',
                  label: 'Pros 👍'
                },
                {
                  id: 'testing/unit/theory/cons',
                  type: 'doc',
                  label: 'Cons 👎'
                },
                {
                  id: 'testing/unit/theory/production-code-to-test-code-ratio',
                  type: 'doc',
                  label: 'Production/Test Code Ratio ☯'
                },
                {
                  id: 'testing/unit/theory/verify-test-code',
                  type: 'doc',
                  label: 'Verify Test Code ✅'
                },
                {
                  type: 'category',
                  label: 'Low-Effort/High-Value Cases 🤩',
                  link: { type: 'doc', id: 'testing/unit/theory/low-effort-high-value-cases/index' },
                  items: [
                    {
                      id: 'testing/unit/theory/low-effort-high-value-cases/the-entry-module',
                      type: 'doc',
                      label: 'The Entry Module 🧭'
                    },
                    {
                      id: 'testing/unit/theory/low-effort-high-value-cases/data-transform',
                      type: 'doc',
                      label: 'Data Transform 🧭'
                    },
                    {
                      id: 'testing/unit/theory/low-effort-high-value-cases/conditional-validation',
                      type: 'doc',
                      label: 'Conditional Validation 🧭'
                    }
                  ]
                }
              ]
            }
          ],
        }
      ],
    }

  ],
  unitTestsSideBar: [

  ]
};

module.exports = sidebars;
