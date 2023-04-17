import React, { useEffect, useState } from "react";
import style from "../componentStyle/prolistmodal.module.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

function ProListModal({ exit }) {
  const [prolist, setProlist] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  const router = useRouter();

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACK_URL}info/getproject`, {
        withCredentials: true,
      })
      .then((res) => {
        setProlist(res.data);
      });
  }, [refresh]);

  const selectHandler = (item) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_BACK_URL}info/selectproject`, item, {
        withCredentials: true,
      })
      .then((res) => {
        toast(res.data.message);
      });
  };

  const deleteHandler = (projectId) => {
    axios
      .delete(`${process.env.NEXT_PUBLIC_BACK_URL}crudRouter/proDel`, {
        data: { projectId },
      })
      .then((res) => {
        setRefresh(!refresh);
        toast(res.data.message);
      });
  };

  const reconfirm = () => {
    return (
      <section className={style.reconfirmBoard}>
        <div
          className={style.reconfirmExit}
          onClick={() => {
            setConfirm(!confirm);
          }}
        >
          X
        </div>
        <span>
          <div className={style.reconfirmTitle}>정말로 삭제하시겠습니까?</div>
          <div className={style.reconfirmBtn}>
            <button
              onClick={() => {
                deleteHandler(deleteId);
                setConfirm(!confirm);
              }}
            >
              네
            </button>
            <button
              onClick={() => {
                setConfirm(!confirm);
              }}
            >
              아니오
            </button>
          </div>
        </span>
      </section>
    );
  };

  return (
    <div className={style.modalBoard}>
      <div
        onClick={() => {
          exit(false);
        }}
        className={style.exit}
      >
        X
      </div>
      <section className={style.modalSec}>
        {prolist ? (
          prolist.map((item, index) => {
            const { title, projectId } = item;
            return (
              <div key={index}>
                <span className={style.listTitle}>{title}</span>
                <section className={style.btnSec}>
                  <button
                    onClick={() => {
                      selectHandler(item);
                    }}
                  >
                    선 택
                  </button>
                  <button
                    onClick={() => {
                      router.push(`/projectDetail/${projectId}`);
                    }}
                  >
                    상세보기
                  </button>
                  <button
                    onClick={() => {
                      setConfirm(!confirm);
                      setDeleteId(projectId);
                    }}
                  >
                    삭 제
                  </button>
                </section>
              </div>
            );
          })
        ) : (
          <div className={style.loading}>loading</div>
        )}
        {confirm ? reconfirm() : null}
      </section>
      <button
        className={style.re}
        onClick={() => {
          setRefresh(!refresh);
          toast("reload 완료");
        }}
      >
        ReFresh
      </button>
    </div>
  );
}

export default ProListModal;
