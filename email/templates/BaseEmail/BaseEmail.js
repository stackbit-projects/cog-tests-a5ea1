import PropTypes from 'prop-types';

const BaseEmail = ({ children }) => {
    return (
        <table width="100%">
            <tr>
                <td align="left" width="100%">
                    <strong style={{ fontSize: '28px' }}>Cerebello</strong>
                </td>
            </tr>
            <tr height="48">
                <td align="center" height="48">
                    {' '}
                </td>
            </tr>
            <tr>
                <td align="center">{children}</td>
            </tr>
            <tr height="48">
                <td align="center" height="48">
                    {' '}
                </td>
            </tr>
            <tr>
                <td align="center" width="100%">
                    <img
                        width="100%"
                        alt="Cerebello Wave Graphic"
                        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDgwMCAzMTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyI+CiAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLDAsLTkwKSI+CiAgICAgICAgPHBhdGggZD0iTTAsMjUwQzQwMCwzMDAgNDAwLDUwIDgwMCwxMDBMODAwLDQwMEwwLDQwMEwwLDI1MFoiIHN0eWxlPSJmaWxsOnVybCgjX0xpbmVhcjEpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJfTGluZWFyMSIgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC0zLjIxNjczZS0xMywzMDYuNjUsLTMwNi42NSwtMy4yMTY3M2UtMTMsMCw5My4zNTAzKSI+PHN0b3Agb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjpyZ2IoMjU1LDI0MiwyMzQpO3N0b3Atb3BhY2l0eToxIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjpyZ2IoMjM5LDIzNSwyNTUpO3N0b3Atb3BhY2l0eToxIi8+PC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KPC9zdmc+Cg=="
                    />
                </td>
            </tr>
            <tr>
                <td align="left" width="100%">
                    <p style={{ fontSize: '12px' }}>© Koentges Lab 2021</p>
                </td>
            </tr>
        </table>
    );
};

BaseEmail.propTypes = {
    children: PropTypes.node
};

BaseEmail.defaultProps = {};

export default BaseEmail;
