export const ALPHADB_SHEET_ID = "1rWCapxGlJ-JkJZjXCGYlC9xvz5E91wjtzqylGkyOmUc"; // ID de Planilha Padrão do Projeto Ativo
export const ALPHADB_ENDPOINT = "https://script.google.com/macros/s/AKfycbw0ACVJncVHxA5hckooONxJg95E_aPXeYpQpAtF4uUnTNxi1R6QG49tdiO_5GsJpRpmdA/exec"; // URL de Execução do Apps Script

/**
 * alphadb: Helper universal de requisições REST para o AlphaDatabase v25
 */
export const alphadb = async <T = unknown>(action: string, extraParams: Record<string, unknown> = {}): Promise<T> => {
  const payload = {
    action,
    sheetId: ALPHADB_SHEET_ID,
    ...extraParams
  };

  try {
    const response = await fetch(ALPHADB_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`Erro de rede no AlphaDatabase: ${response.status}`);
    }

    const data = await response.json();
    if (data && data.success === false) {
      throw new Error(data.error || "Erro retornado pelo servidor AlphaDatabase");
    }

    return data as T;
  } catch (err) {
    console.error("AlphaDatabase Request Error:", err);
    throw err;
  }
};
