import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';

export default {
    input: [
        './src/ts/main.ts'
    ],
    output: {
        dir: 'dist/js'
    },
    plugins: [
        typescript(),
        nodeResolve()
    ]
};