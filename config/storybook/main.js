import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config = {
    stories: [
        '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-webpack5-compiler-swc',
    ],
    framework: '@storybook/react-webpack5',
    webpackFinal: async (webpackConfig) => {
        const paths = {
            build: '',
            html: '',
            entry: '',
            src: resolve(__dirname, '..', '..', 'src'),
        };

        const cfg = webpackConfig;

        cfg.resolve = cfg.resolve || {};
        cfg.resolve.modules = cfg.resolve.modules || [];
        cfg.resolve.modules.push(paths.src);

        cfg.resolve.extensions = cfg.resolve.extensions || [];
        cfg.resolve.extensions.push('.ts', '.tsx');

        cfg.resolve.alias = cfg.resolve.alias || {};
        cfg.resolve.alias['@'] = resolve(__dirname, '..', '..', 'src');
        cfg.resolve.alias.app = resolve(__dirname, '..', '..', 'src', 'app');
        cfg.resolve.alias.shared = resolve(__dirname, '..', '..', 'src', 'shared');
        cfg.resolve.alias.entities = resolve(__dirname, '..', '..', 'src', 'entities');
        cfg.resolve.alias.features = resolve(__dirname, '..', '..', 'src', 'features');
        cfg.resolve.alias.widgets = resolve(__dirname, '..', '..', 'src', 'widgets');
        cfg.resolve.alias.pages = resolve(__dirname, '..', '..', 'src', 'pages');

        if (cfg.module?.rules) {
            cfg.module.rules = cfg.module.rules.map((rule) => {
                if (rule !== '...' && rule.test && /svg/.test(String(rule.test))) {
                    return {
                        ...rule,
                        exclude: /\.svg$/i,
                    };
                }
                return rule;
            });
        }

        cfg.module = cfg.module || {};
        cfg.module.rules = cfg.module.rules || [];
        cfg.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        // CSS/SCSS loader configuration
        cfg.module.rules.push({
            test: /\.s[ac]ss$/i,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            auto: (resPath) => Boolean(resPath.includes('.module.')),
                            localIdentName: '[path][name]__[local]--[hash:base64:5]',
                        },
                    },
                },
                'sass-loader',
            ],
        });

        return cfg;
    },
};

export default config;
