<template>
  <div>
    <div class="relative mb-8">
      <input
        type="text"
        v-model="search"
        @input="searching"
        placeholder="Search for project.."
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
    </div>
    <div class="grid-project">
      <project-card :data="projects" v-if="!search" />
    </div>
    <div v-if="search">
      <div class="grid-project">
        <project-card :data="results" />
      </div>
      <div v-if="!results.length" class="text-center">-not found-</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProjectCard from "./../components/ProjectCard.vue";

const search = ref(null);

const data = ref([
  {
    name: "Manajemen Stok dan Penjualan Outlet Pisang Keju Haji Kadap",
    description: "Laravel 10, Bootstrap, Alpine.js, MySQL",
    thumbnail: "/img/project/hajikadap.png",
  },
  {
    name: "LMS Guruinovatif.id",
    description: "Laravel 9, Tailwind CSS, Alpine.js, MySQL, Livewire",
    thumbnail: "/img/project/gi.PNG",
  },
  {
    name: "Website Donasi Online YCHI",
    description: "Laravel 10, Bootstrap 5, MySQL, Livewire",
    thumbnail: "/img/project/ychi.PNG",
  },
  {
    name: "E-Book Platform bariskoding.com",
    description: "Laravel 10, Inertia.js, Vue.js, Tailwind CSS, MySQL",
    thumbnail: "/img/project/bariskoding.PNG",
  },
  {
    name: "Mitra Point Management System Slimsure",
    description: "Laravel 9, Bootstrap 5, MySQL, Admin LTE",
    thumbnail: "/img/project/slimsure.PNG",
  },
  {
    name: "SIHAWAS Kab. Barito Kuala",
    description: "Laravel 8, Bootstrap 5, MySQL, Admin LTE",
    thumbnail: "/img/project/sihawas.PNG",
  },
  {
    name: "Aplikasi Rekam Medis Puskesmas Tambarangan, Tapin",
    description: "Codeigniter, Bootstrap 4, MySQL, Admin LTE",
    thumbnail: "/img/project/rekammedis.png",
  },
  {
    name: "Simple Course Microservices Architecture",
    description: "Laravel 8, React.js, Express.js, MySQL, Netlify",
    thumbnail: "/img/project/simple-course.png",
  },
  {
    name: "Sekolah Juara by Guruinovatif.id",
    description: "Laravel 7, Bootstrap, MySQL",
    thumbnail: "/img/project/sekolah-juara-gi.png",
  },
  {
    name: "LMS TNYI (The New You Institue)",
    description: "Laravel 8, Bootstrap, MySQL",
    thumbnail: "/img/project/lms-tnyi.png",
  },
  {
    name: "Website Resmi Kampus Politeknik Hasnur (polihasnur.ac.id)",
    description: "Laravel 8, Bootstrap, MySQL",
    thumbnail: "/img/project/polihasnur.png",
  },
  {
    name: "Platform HAFECS Representatif",
    description: "Laravel 7, Bootstrap, MySQL",
    thumbnail: "/img/project/hreps.png",
  },
  {
    name: "Online Course HAFECS v2.0",
    description: "Laravel 6, Bootstrap, MySQL",
    thumbnail: "/img/project/guruinovatif-v2.png",
  },
  {
    name: "GIBS Teacher Assessment Apps",
    description: "Codeigniter, jQuery, MySQL",
    thumbnail: "/img/project/assessment.png",
  },
  {
    name: "Landing Page website GampangJualan.id",
    description: "Codeigniter, basic-apl-template, Ajax, MySQL",
    thumbnail: "/img/project/gampangjualan.png",
  },
  {
    name: "Aplikasi Pendataan Keluar Masuk Batubara CV. Binuang Mitra Mandiri",
    description: "Codeigniter, Admin LTE, MySQL",
    thumbnail: "/img/project/batubara.png",
  },
  {
    name: "Sistem Pendukung Keputusan Metode Simple Additive Weighting (SAW)",
    description: "Codeigniter, Andora Template, MySQL",
    thumbnail: "/img/project/spk-saw.png",
  },
  {
    name: "Aplikasi E-Voting Pemilihan (Ketua Osis, Kepala Desa, Ketua  BEM)",
    description: "Codeigniter, Bootstrap, MySQL",
    thumbnail: "/img/project/evoting.png",
  },
  {
    name: "Sistem E-Learning Politeknik Hasnur (Ujian Online, Upload Tugas, Repository Materi)",
    description: "Codeigniter, Materialize CSS, MySQL",
    thumbnail: "/img/project/e-learning.png",
  },
  {
    name: "Aplikasi Perpustakaan SMAN 12 Banjarmasin",
    description: "Codeigniter, Admin LTE, MySQL",
    thumbnail: "/img/project/perpustakaan.png",
  },
  {
    name: "Aplikasi Kepegawaian dan Jadwal Mengajar SMAN 12 Banjarmasin",
    description: "Codeigniter, Admin LTE, MySQL",
    thumbnail: "/img/project/jadwal-mengajar.png",
  },
  {
    name: "Sistem Pendataan Arsip Surat Menyurat di PDAM Kuala Kapuas",
    description: "Codeigniter, Andora Template, MySQL",
    thumbnail: "/img/project/arsipsurat.png",
  },
  {
    name: "Aplikasi Manajemen Kurikulum 2013 SDN Pasar Lama 6 Banjarmasin",
    description: "Codeigniter, Materialize CSS, MySQL",
    thumbnail: "/img/project/manajemen-k13.png",
  },
  {
    name: "Aplikasi Request Digitaliz Yayasan Hasnur Centre",
    description: "Codeigniter, Bootstrap, MySQL",
    thumbnail: "/img/project/request-digitaliz.png",
  },
  {
    name: "Aplikasi Manajemen Penjualan Bahan Sparepart PT. Rezeki Cahya AMHA Banjarmasin",
    description: "Codeigniter, Admin LTE, MySQL",
    thumbnail: "/img/project/penjualan-sparepart.png",
  },
  {
    name: "Sistem Pendukung Keputusan Kepala Desa Menggunakan Metode WP (Weighted Product)",
    description: "Codeigniter, Bootstrap, MySQL",
    thumbnail: "/img/project/spk-wp.png",
  },
  {
    name: "Aplikasi Manajemen Penjualan Bahan Bangunan Toko Mentaya Banjarmasin",
    description: "Codeigniter, Materialize CSS, MySQL",
    thumbnail: "/img/project/bahan-bangunan.png",
  },
  {
    name: "Aplikasi Manajemen Data Cafe (Absensi, Penjualan, Penggajian)",
    description: "Codeigniter, Bootstrap 4, SB Admin Template",
    thumbnail: "/img/project/ci-cafe.png",
  },
  {
    name: "User Interface Design for website adver.id",
    description: "Figma Design",
    thumbnail: "/img/project/adver-figma.png",
  },
]);

const projects = data.value;

const results = ref([]);

const searching = () => {
  const findItem = projects.filter(obj =>
    obj.name.toLowerCase().includes(search.value.toLowerCase())
  );

  results.value = findItem;
};
</script>
