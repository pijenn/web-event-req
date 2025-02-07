import { oprecInfo } from "../../data/data";
import { getUserData } from "./SessionHelper";

const getPathName = (pathname) => {
  pathname = pathname.split("/");
  if (pathname.length > 3) pathname.pop();
  pathname = pathname.join("/");
  return pathname;
};

const getDataOprec = (id) => {
  const data = oprecInfo.find((item) => item.id === id);
  return data;
};

const getRandomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const getInitials = (name) => {
  let initials;
  const nameSplit = name.split(" ");
  const nameLength = nameSplit.length;
  if (nameLength > 1) {
    initials =
      nameSplit[0].substring(0, 1) + nameSplit[nameLength - 1].substring(0, 1);
  } else if (nameLength === 1) {
    initials = nameSplit[0].substring(0, 1);
  } else return;

  return initials.toUpperCase();
};

const createImageFromInitials = (size, name, color) => {
  if (name == null) return;
  name = getInitials(name);

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  canvas.width = canvas.height = size;

  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, size, size);

  context.fillStyle = `${color}50`;
  context.fillRect(0, 0, size, size);

  context.fillStyle = color;
  context.textBaseline = "middle";
  context.textAlign = "center";
  context.font = `${size / 2}px Chivo`;
  context.fillText(name, size / 2, size / 2);

  return canvas.toDataURL();
};

const getFormFields = (data) => {
  const dataField = [
    {
      tag: "cf-robot-message",
      "cf-questions": `Hai KBMFILKOM! Kamu login sebagai:\n\n<b>Nama</b>: ${getUserData.nama}\n<b>Prodi</b>: ${getUserData.prodi}\n<b>NIM</b>: ${getUserData.nim}`,
    },
    {
      tag: "fieldset",
      "cf-input-placeholder": "Jawab...",
      "cf-questions": `Robot ini akan menuntun kamu dalam proses <b>${
        data.title[0] + " " + data.title[1]
      }</b>. Sebelum melanjutkan, pastikan kamu sudah:\n\n1. Mengunduh berkas soft file pendaftaran\n2. Mengisi berkas soft file pendaftaran\n3. Mengunggah berkas soft file ke Google Drive (akses public/shareable) dengan format: ${
        data.formatDrive
      }\n\nJika sudah, klik/tap pernyataan di bawah.`,
      children: [
        {
          tag: "input",
          type: "radio",
          name: "setuju1",
          "cf-label":
            "Iya, Aku sudah setuju dan ngelakuin semua ketentuan yang ada",
          value: "1",
        },
      ],
    },
  ];

  let pattern = "";

  let pattern2 = "^--- TIDAK MEMILIH ---$|";

  data.options.map((item, index) => {
    pattern += `^${item}$`;
    pattern2 += `^${item}$`;
    if (index != data.options.length - 1) {
      pattern += `|`;
      pattern2 += `|`;
    }
  });

  data.formFields.map((item) => {
    let isValid = true;
    let field = {};
    if (item.hasOwnProperty("is_robot")) {
      field["tag"] = "cf-robot-message";
    } else {
      field["tag"] = "input";
      if (item.hasOwnProperty("type")) {
        if (!["radio", "checkbox"].includes(item.type))
          field["type"] = item.type;
        else {
          isValid = false;
          item.option.map((items, index) => {
            field = {};
            field["tag"] = "input";
            field["type"] = item.type;
            field["name"] = item.name;
            if (item.hasOwnProperty("name")) field["name"] = item.name;
            if (item.hasOwnProperty("questions") && index == 0)
              field["cf-questions"] = item.questions;
            if (items != "") {
              field["cf-label"] = items;
              field["value"] = items;
            }
            dataField.push(field);
          });
        }
      } else {
        field["type"] = "text";
      }
    }
    if (item.hasOwnProperty("name")) field["name"] = item.name;
    if (item.hasOwnProperty("questions"))
      field["cf-questions"] = item.questions;
    if (item.hasOwnProperty("placeholder"))
      field["cf-input-placeholder"] = item.placeholder;
    if (item.hasOwnProperty("pattern")) field["pattern"] = item.pattern;
    if (["pilihan1", "divisi1", "proker"].includes(item.name)) {
      field["list"] = "options1";
      field["pattern"] = pattern;
    }
    if (["pilihan2", "divisi2"].includes(item.name)) {
      field["list"] = "options2";
      field["pattern"] = pattern2;
    }
    if (!["pilihan2", "divisi2", "alasan2"].includes(item.name))
      field["required"] = true;
    if (isValid) dataField.push(field);
  });

  dataField.push({
    tag: "fieldset",
    "cf-input-placeholder": "Konfirmasi...",
    "cf-questions":
      "Sebelum menyelesaikan pendaftaran, scroll up dan cek lagi data diri kamu ya!",
    children: [
      {
        tag: "input",
        type: "radio",
        name: "setuju2",
        "cf-label": "Iya, data diriku sudah benar kok",
        value: "1",
      },
    ],
  });

  return dataField;
};

const getCurrentOprec = () => {
  const filteredOprec = oprecInfo.filter(
    (oprec) =>
      oprec.openDate <= Date.now() &&
      oprec.announceDate.getTime() + 864_000_000 >= Date.now()
  );
  // sort based on latest open date
  return filteredOprec.sort(
    (a, b) => new Date(b.openDate) - new Date(a.openDate)
  );
};

export {
  getPathName,
  getDataOprec,
  getInitials,
  getRandomColor,
  createImageFromInitials,
  getFormFields,
  getCurrentOprec,
};
