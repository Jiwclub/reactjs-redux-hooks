import { APP_ACTION_ADD, APP_ACTION_REM, APP_ACTION_CLR } from "../Constants";
//ชุดด้านบนส่งไปให้ reducers
//payload ผลลัพธ์ที่เกิดจาก action นี้
export const setStateToAdd = () => ({
  type: APP_ACTION_ADD,
});

//คำสั่งที่ใช้เจน rxaction
export const setStateToRem = () => ({
  type: APP_ACTION_REM,
});

export const setStateToClr = (payload) => ({
  type: APP_ACTION_CLR,
  payload,
});

// ทำให้ทุก conponent สามารถ เรียกใช้งานได้

//ชุดด้านล่างรับคำสั่งมาจาก component
export const add = () => {
  return (dispatch) => {
    dispatch(setStateToAdd());
  };
};

export const remove = () => {
  return (dispatch) => {
    dispatch(setStateToRem());
  };
};

export const clear = (payload) => {
  return (dispatch) => {
    dispatch(setStateToClr(payload));
  };
};
