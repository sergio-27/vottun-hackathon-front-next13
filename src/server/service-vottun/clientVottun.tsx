

const baseVottunUrl = "https://api.vottun.tech/cwll/v1";

export const getVottunClient = async ({
    method,
    endpoint,
    body
}: {
    method: string,
    endpoint: string,
    body: any | null
}) => { 
    const response = fetch(
        baseVottunUrl + endpoint,
        {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyWkRKY2trTHpSVkJnNk1ndlM5OEpKb1VZdzUiLCJ0eXBlIjoiZXJwIiwiaWQiOiIiLCJ1c2VybmFtZSI6InNlcmdpbzk2cnVpekBnbWFpbC5jb20iLCJjaWQiOiJiOGRmN2E3Mi0zMDcyLTQ4MTItYjRjZi1kMmI5ODU3NTM4MmIiLCJza3UiOlt7InIiOjExLCJzIjo4LCJlIjowfSx7InIiOjExLCJzIjo4MDAxLCJlIjowfSx7InIiOjExLCJzIjo4MDAyLCJlIjowfV0sInB1YyI6IjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCJ9.nUpw4ePzw4DNT1CCx-Pab1tRvdgHhk_qk-lheYbodvu8OFs09mWjMdw1lSZQ39_lezLz-KjsRmBg0XrREWS2zrR2d6tSDQjouG-baLXPLQ_uVXembgrz9igjJ8Pya6e8eVSS133O5H3pf5iRvoKxqd12rVmmNUqt-tO-mGE8Bq4e-fXMccUlQwIV4AkNIkVwjBaprPBfqSzXUBrrgA48Y5LNQTJC5TBlqPopKvZFMfuOFetUIiVYCsm_LU_2CzYIqKKwmJIqoco36SO9qeBsZqb2i0zSP0Ms1qZ1sfBkuFkwZnVuWNUc8_JQy50k89P-Xn4TwxdWQLwGg2MYovnSgqEZI3M7vkru3Be7TdTclfyOKuBEaEyJ5fl4Xo6nV1DrbK9JzyFlkyDS-gy5it_MsjJjHKrFfXgy-JZNvIRYvkOABPG6fEuOpkBrvy4hSMS8rBQZJP6Ihwu0YZ6FgexkoqEd96LjGdgx_7F8FbkvEZkQ35vNF9GS4f1mmFndSfAHifG9fzqbcUJymtSTd40fuJSlbxjQ8bg2U_HODL-W9ox7sOisj2ggi1Z2IulHLFBCf-y8A4UHjJ-VhR0bLrT9iMBPh_ubn1_BhfBNue2t4p9EN0YvFGx-pCk3gC0q7HhY1XU8HsciG_6jPKHOWY9lpUZsYkF0VSgu2_oUzmZYVsI",
                "Content-Type": "application/json",
                "x-application-vkn": "X68MjpFedp4w9uul5N-wPhgZ_2ApPTgQ3SmtnwPYr0HNZwe1KpD0t7xIXqmQGF0i"
            },
            body: body
        }
    );
    console.log("url", baseVottunUrl + endpoint);

    const jsonResponse = (await response).json();

    return jsonResponse;
  }