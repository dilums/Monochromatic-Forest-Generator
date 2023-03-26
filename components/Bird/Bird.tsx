import { rand, randChoise } from "@/utils";
/* eslint-disable react/jsx-key */
const birdPaths = [
  <path d="M1.17751 2.13046C1.23574 2.13046 1.29397 2.13045 1.38131 2.15956C1.52687 2.15956 1.70156 2.1887 1.87624 2.21781C1.93447 2.21781 2.02181 2.21781 2.08004 2.21781C2.28383 2.21781 2.48761 2.24691 2.72052 2.24691C2.74963 2.24691 2.77875 2.24691 2.80787 2.24691C5.57366 2.36336 9.44578 2.24692 10.0863 2.27603C10.8432 2.30515 12.4445 3.32413 13.8128 3.64438C13.8128 3.76083 13.8128 3.87729 13.8419 3.99374C13.9293 4.31399 14.1331 4.51777 14.3078 4.48865C14.4824 4.43043 14.5406 4.1393 14.4824 3.81905C14.4824 3.78993 14.4533 3.73171 14.4533 3.7026C14.5698 3.7026 14.6571 3.7026 14.7736 3.7026C14.7736 3.76083 14.7736 3.81905 14.8027 3.90639C14.89 4.22665 15.0938 4.45956 15.2685 4.40133C15.4432 4.34311 15.5014 4.05195 15.4432 3.7317C15.4432 3.67347 15.414 3.64438 15.3849 3.58615C17.2773 3.17856 19.3444 1.83933 20.2761 1.72287C20.3634 1.72287 20.4507 1.69375 20.5672 1.69375H20.5963C20.7128 1.69375 20.8583 1.66465 21.033 1.66465H21.0621C21.2368 1.66465 21.4115 1.63551 21.5862 1.6064C22.0229 1.57728 22.5178 1.51906 23.0418 1.48995C24.0899 1.40261 25.2545 1.31526 26.3608 1.19881H26.3899C26.5063 1.19881 26.6228 1.16971 26.7393 1.16971H26.7684C26.914 1.16971 27.0304 1.1406 27.176 1.11149C27.2924 1.11149 27.438 1.08235 27.5545 1.05323H27.5836C27.7 1.02412 27.8164 1.02413 27.9329 0.995011H27.9621C28.0785 0.995011 28.195 0.965902 28.2823 0.936788C28.3114 0.936788 28.3405 0.936788 28.3405 0.936788C28.4278 0.936788 28.5152 0.907691 28.6025 0.907691C28.6317 0.907691 28.6608 0.907691 28.6899 0.907691C28.7772 0.907691 28.8354 0.878565 28.9228 0.878565C28.9519 0.878565 28.981 0.878553 29.0101 0.84944C29.0392 0.84944 29.0684 0.84944 29.0975 0.84944C29.1266 0.84944 29.1557 0.849456 29.1848 0.820342C29.2139 0.820342 29.2431 0.82033 29.2722 0.791216C29.3304 0.791216 29.3595 0.762119 29.4177 0.762119C29.4468 0.762119 29.4759 0.762107 29.5051 0.732993H29.5342C29.5633 0.732993 29.5924 0.703895 29.6215 0.703895C29.6506 0.703895 29.6797 0.67477 29.7089 0.67477C29.738 0.67477 29.7671 0.645644 29.7962 0.645644H29.8253H29.8544H29.8836L29.9417 0.616547C29.9709 0.616547 29.9709 0.587421 29.9709 0.587421L30 0.558324V0.529198V0.587421C30 0.587421 29.9709 0.558324 29.9417 0.558324C29.8253 0.52921 29.7671 0.5001 29.7089 0.5001C29.6506 0.470987 29.5633 0.470963 29.476 0.441849C29.4469 0.441849 29.4177 0.441865 29.3886 0.412752C29.3304 0.412752 29.243 0.383626 29.1848 0.383626C29.1266 0.383626 29.0975 0.383642 29.0392 0.354528C28.9519 0.354528 28.8937 0.325403 28.8063 0.325403C28.7481 0.325403 28.6899 0.325419 28.6316 0.296305C28.5443 0.296305 28.4569 0.26718 28.3405 0.26718C28.2823 0.26718 28.2241 0.26718 28.1659 0.26718C28.0494 0.26718 27.9329 0.238054 27.8165 0.238054C27.7582 0.238054 27.7 0.238054 27.6709 0.238054C27.5253 0.238054 27.3798 0.208956 27.2051 0.208956C27.2051 0.208956 27.176 0.208956 27.1469 0.208956C25.5456 0.121615 23.6241 0.0633887 22.3722 0.0051613C20.1887 -0.0821799 17.9178 0.965917 17.4229 1.11149C16.9571 1.22794 16.2001 0.587442 13.2596 1.25706C11.804 1.60642 11.8622 0.500099 9.47489 0.703895C8.28123 0.791237 5.63187 0.936787 3.44835 1.14058C3.41924 1.14058 3.39015 1.14058 3.39015 1.14058C3.2737 1.14058 3.18635 1.16971 3.09901 1.16971C2.92433 1.19882 2.74966 1.19882 2.57498 1.22793C2.45852 1.22793 2.34204 1.25706 2.22558 1.25706C2.08001 1.25706 1.96356 1.28617 1.81799 1.31528C1.70154 1.31528 1.61421 1.34439 1.49775 1.3735C1.3813 1.3735 1.26485 1.40261 1.17751 1.43173C1.06106 1.43173 0.973709 1.46084 0.886368 1.48995C0.799027 1.51906 0.711664 1.51906 0.624323 1.54817C0.536982 1.57729 0.478756 1.57728 0.420528 1.6064C0.362301 1.6064 0.275001 1.63553 0.245887 1.66465C0.18766 1.69376 0.158499 1.69376 0.129385 1.72287C0.100272 1.72287 0.0420926 1.75197 0.0420926 1.75197C-0.0161347 1.78108 0.0129394 1.8102 0.0129394 1.83932C0.0129394 1.83932 -0.0161742 1.86844 0.0129394 1.86844C0.042053 1.89756 0.100295 1.95578 0.187636 1.98489C0.304091 2.04312 0.449657 2.07222 0.595225 2.10134C0.653453 2.10134 0.682542 2.13046 0.740769 2.13046C0.886337 2.10135 1.00283 2.10135 1.17751 2.13046Z" />,
  <path d="M19.9846 0.400942C19.9846 0.400942 19.9846 0.38548 19.9846 0.370059V0.354648C19.9846 0.339227 19.9692 0.339244 19.9692 0.323824L19.9537 0.308412C19.9383 0.292992 19.9229 0.277538 19.9075 0.262118C19.9075 0.262118 19.8921 0.246706 19.8766 0.246706C19.8458 0.231286 19.815 0.215891 19.7687 0.200471C19.6608 0.15421 19.522 0.12337 19.3832 0.0925296C19.3524 0.0925296 19.3061 0.0771178 19.2753 0.0771178C19.1365 0.0462772 18.9977 0.030832 18.8435 0.0154118H18.8281C18.6584 -8.47133e-06 18.4888 0 18.3192 0C18.2729 0 18.2267 0 18.1804 0C18.0108 0 17.8258 0 17.6561 0C16.2837 0.0462608 14.8497 0.27758 14.6338 0.293C14.31 0.308421 12.7833 0.74018 12.0278 2.128C11.303 3.45415 11.3338 3.85506 11.0563 4.08636C10.7941 4.30224 10.3315 4.4256 10.3315 4.4256C10.3315 4.4256 8.80493 4.13263 7.81804 3.63918C6.83115 3.14573 5.53586 3.00695 4.1943 3.74712C3.8859 3.91675 3.42329 4.1943 2.92985 4.51812C2.92985 4.51812 2.91442 4.51812 2.91442 4.53354C2.5906 4.734 2.26678 4.96529 1.94295 5.1966C1.72707 5.3508 1.51118 5.50505 1.31072 5.64383L1.29531 5.65924C1.26447 5.67466 1.23362 5.70552 1.20278 5.73636L1.18735 5.75177C1.12567 5.79803 1.07941 5.84429 1.01773 5.87513L1.00232 5.89054C0.986901 5.89054 0.986889 5.90595 0.971468 5.90595C0.909788 5.95221 0.863532 5.99846 0.801851 6.0293C0.786431 6.04472 0.786433 6.04477 0.771013 6.06019C0.678492 6.13729 0.601394 6.19897 0.524293 6.27607C0.508873 6.29149 0.508875 6.29147 0.493455 6.30689C0.478035 6.32231 0.46261 6.33771 0.44719 6.35313L0.431764 6.36854C0.385503 6.39938 0.354663 6.44564 0.323823 6.47648C0.308403 6.4919 0.292985 6.49194 0.292985 6.50736C0.262144 6.5382 0.231302 6.569 0.215882 6.58442C0.200462 6.59984 0.200464 6.59988 0.185044 6.6153L0.169617 6.63072C0.154197 6.64614 0.138788 6.66152 0.123367 6.69236C0.123367 6.70778 0.107949 6.70783 0.0925292 6.72325C0.077109 6.73867 0.0771028 6.75407 0.0771028 6.75407C0.0616826 6.76949 0.0616848 6.78489 0.0462646 6.78489L0.0308382 6.8003V6.81578C0.015418 6.84662 0 6.86199 0 6.89283V6.90825C0 6.92367 0 6.93912 0 6.95454V6.96995V6.98536L0.0154264 7.00078C0.0154264 7.00078 0.0308382 7.00077 0.0308382 7.01619C0.0308382 7.01619 0.0462561 7.01624 0.0616763 7.03166H0.0771028H0.0925292C0.13879 7.03166 0.16963 7.03166 0.20047 7.03166C0.231311 7.03166 0.277562 7.0162 0.323823 7.00078C0.339243 7.00078 0.354673 6.98536 0.385514 6.98536C0.416354 6.96994 0.462606 6.96996 0.508867 6.95454C0.539707 6.93912 0.570549 6.93914 0.585969 6.92372C0.63223 6.9083 0.678488 6.89284 0.724748 6.87742C0.755589 6.862 0.786429 6.8466 0.832689 6.8466C0.89437 6.83118 0.940641 6.80031 1.00232 6.78489C1.03316 6.76947 1.064 6.75408 1.11026 6.73866C1.17194 6.70782 1.24904 6.67696 1.31072 6.66154C1.34156 6.64612 1.37241 6.63072 1.40325 6.63072C1.51119 6.58446 1.61913 6.5382 1.72707 6.50736C1.74249 6.50736 1.7579 6.49195 1.77332 6.49195C1.86584 6.44569 1.95836 6.4148 2.0663 6.36854C2.09714 6.35312 2.12799 6.33772 2.15883 6.3223C2.23593 6.29146 2.31303 6.26062 2.39013 6.21436C2.40555 6.21436 2.42097 6.19895 2.43639 6.19895C3.08404 5.90597 3.63917 5.64382 3.79337 5.5513C4.14804 5.32 6.16808 5.41249 6.93909 5.82883C7.44795 6.09098 8.26523 6.59988 9.17502 6.73866C8.71242 6.7695 8.09561 6.80035 8.08019 6.92372C8.06477 7.09334 9.05165 6.98537 9.48342 6.96995C9.71472 6.96995 9.94604 6.8466 10.1311 6.73866C10.2853 6.70782 10.4549 6.66152 10.6091 6.58442C12.0123 5.98303 12.0123 5.6284 12.4749 5.45877C12.5366 5.44335 12.5829 5.39708 12.6446 5.36624C12.6754 5.35082 12.7062 5.31997 12.7371 5.28913C12.7525 5.27371 12.7833 5.25832 12.7988 5.22748C12.953 5.07328 13.0609 4.87282 13.138 4.67236C13.6623 4.549 14.3716 4.37935 13.7394 4.28683C13.4618 4.24057 13.2768 4.22513 13.138 4.20971C13.1072 4.14803 13.0763 4.08638 12.9992 4.04012C12.9992 4.04012 14.3562 1.5112 15.3277 1.48036C15.3739 1.48036 15.4202 1.48036 15.4819 1.48036C15.4973 1.48036 15.4973 1.48036 15.5127 1.48036C15.6361 1.46494 15.7903 1.4649 15.9599 1.43406H15.9753C16.8851 1.34154 18.3809 1.12567 19.2753 0.878943C19.2907 0.878943 19.2907 0.878943 19.3061 0.878943C19.3524 0.863522 19.414 0.848127 19.4603 0.832707C19.4603 0.832707 19.4757 0.832716 19.4911 0.817295C19.5374 0.801875 19.5837 0.786421 19.6145 0.771001C19.6299 0.771001 19.6299 0.77101 19.6453 0.755589C19.6916 0.740169 19.7224 0.724774 19.7533 0.709354H19.7687C19.8458 0.678514 19.9075 0.632253 19.9537 0.601413C19.9692 0.601413 19.9692 0.585942 19.9692 0.585942C19.9846 0.570522 20 0.555119 20 0.555119C19.9846 0.416336 19.9846 0.400942 19.9846 0.400942Z" />,
  <path d="M19.9068 7.09479H19.885C19.8632 7.09479 19.8414 7.07301 19.7979 7.07301C19.7761 7.07301 19.7543 7.07301 19.7326 7.07301C19.689 7.07301 19.6454 7.07301 19.6019 7.07301C19.5801 7.07301 19.5583 7.07301 19.5147 7.07301C19.4711 7.07301 19.4058 7.09479 19.3623 7.09479C19.3405 7.09479 19.297 7.11657 19.2752 7.11657C19.2098 7.13835 19.1444 7.13834 19.0791 7.16012C19.0573 7.16012 19.0138 7.1819 18.9703 7.1819C18.9049 7.20368 18.8178 7.22547 18.7524 7.24725C18.7306 7.24725 18.6871 7.26902 18.6653 7.26902C18.5782 7.2908 18.4911 7.31258 18.404 7.33436C18.3822 7.33436 18.3604 7.35615 18.3387 7.35615C17.315 7.66107 16.0735 8.11843 15.3548 8.31445C14.0045 8.70649 10.9117 9.03319 9.88809 9.3381C9.67029 9.40344 9.40893 9.5559 9.1258 9.73014C9.03868 9.33811 8.95152 8.90251 8.88618 8.42335C8.60305 6.72453 8.29814 6.55029 7.3616 5.72265C6.90423 5.33062 5.29254 3.93671 3.70261 2.62992C3.65905 2.58636 3.61548 2.56458 3.57192 2.52102C3.52836 2.49924 3.50656 2.47746 3.463 2.4339C3.28876 2.30322 3.11455 2.15076 2.96209 2.02008C2.91853 1.97652 2.87496 1.95475 2.8314 1.91119C2.67894 1.78051 2.50472 1.64983 2.35226 1.54093C2.3087 1.49737 2.26513 1.47558 2.22157 1.4538C2.06911 1.3449 1.91664 1.21423 1.78596 1.10533C1.7424 1.08355 1.7206 1.03999 1.67704 1.01821C1.54636 0.909308 1.39395 0.80041 1.28505 0.713291C1.24149 0.691511 1.21968 0.669736 1.1979 0.647956C1.06722 0.560837 0.958344 0.473716 0.849445 0.386596C0.849445 0.386596 0.805838 0.36482 0.784058 0.34304C0.675159 0.2777 0.566261 0.190574 0.479142 0.147015L0.457374 0.125237C0.348475 0.059897 0.283184 0.0381147 0.217845 0.0163349C0.152505 -0.00544496 0.108934 -0.00544496 0.0871545 0.0163349C0.0435948 0.0381147 0.0217798 0.0816753 0 0.147015C0 0.168795 0 0.190582 0 0.190582C0 0.255921 0 0.29948 0 0.34304C0 0.36482 0.0217678 0.386595 0.0217678 0.408375C0.0435477 0.473714 0.0653747 0.517272 0.0871545 0.582611C0.108934 0.604391 0.10891 0.647955 0.13069 0.669734C0.17425 0.735074 0.196053 0.80041 0.239612 0.865749C0.261392 0.909309 0.283136 0.931091 0.304916 0.974651C0.348476 1.03999 0.392035 1.12711 0.457374 1.19245C0.479154 1.23601 0.522749 1.27957 0.544529 1.32313C0.609868 1.38847 0.653415 1.47559 0.718754 1.56271C0.762314 1.60626 0.805897 1.64982 0.827677 1.71516C0.893016 1.7805 0.936563 1.86763 1.0019 1.93297C1.04546 1.99831 1.1108 2.06364 1.15436 2.12898C1.17614 2.17254 1.21965 2.19432 1.24143 2.23788C2.17796 3.39221 3.35415 4.63366 3.68084 5.1346C4.29068 6.09291 3.92036 6.11469 4.0946 7.57394C4.24706 8.81539 4.98763 10.9063 5.20542 11.5161C4.18177 11.821 3.35409 12.2566 2.87493 12.2131C2.22154 12.1695 -0.370199 11.821 0.348535 12.3873C0.87125 12.8011 2.3958 13.0407 3.44123 13.1931C3.50657 13.2149 3.57189 13.2149 3.63722 13.2149C3.659 13.2149 3.7026 13.2367 3.72438 13.2367C3.74616 13.2367 3.7679 13.2367 3.78968 13.2585C3.72434 13.2585 3.68078 13.2585 3.63722 13.2585C3.31053 13.2585 1.786 12.8664 1.72066 13.0625C1.65532 13.2585 2.87498 13.4327 3.3977 13.5416C3.76795 13.6287 4.20354 13.4981 4.4649 13.3674C5.33609 13.607 8.64663 14.7613 9.60494 14.5653C10.6286 14.3475 10.9335 14.0426 11.4344 14.0861C11.9136 14.1297 12.567 14.1515 12.763 14.3039L12.7848 14.3257C12.8066 14.3257 12.8283 14.3475 12.8501 14.3693L12.8719 14.391C12.8936 14.4128 12.9372 14.4346 12.9808 14.4564H13.0026C13.0243 14.4564 13.0244 14.4781 13.0462 14.4781C13.0462 14.4781 13.0679 14.4781 13.0679 14.4999C13.0897 14.5217 13.1115 14.5217 13.1332 14.5435C13.155 14.5435 13.155 14.5653 13.1768 14.5653C13.1986 14.5653 13.2204 14.587 13.2204 14.587C13.2422 14.6088 13.2639 14.6306 13.3075 14.6306C13.3292 14.6524 13.3293 14.6524 13.3511 14.6524C13.3729 14.6742 13.3946 14.6742 13.4164 14.6959C13.4382 14.7177 13.4818 14.7395 13.5035 14.7395L13.5471 14.7613C13.5689 14.7613 13.5906 14.7831 13.6124 14.7831C13.6342 14.8048 13.6778 14.8266 13.6995 14.8266H13.7213C13.7431 14.8484 13.7648 14.8484 13.7866 14.8484C13.8302 14.8702 13.852 14.8702 13.8955 14.892C13.9173 14.892 13.9609 14.9137 13.9827 14.9137C14.0262 14.9137 14.048 14.9137 14.048 14.892C14.048 14.8702 14.0263 14.8048 13.9609 14.7395C13.9609 14.7395 13.9608 14.7395 13.9391 14.7177C13.8084 14.5435 13.5907 14.2821 13.3729 14.0425C13.3511 14.0208 13.3292 13.9772 13.3075 13.9554C13.2857 13.9119 13.2422 13.8901 13.2204 13.8465C13.1986 13.8248 13.1768 13.803 13.155 13.7812C13.1332 13.7376 13.1115 13.7159 13.0897 13.6723C13.0897 13.6505 13.0679 13.6287 13.0679 13.6287C13.0462 13.5634 13.0243 13.5198 13.0243 13.4981C13.0243 13.4763 13.0243 13.4327 13.0026 13.3892C13.0461 13.4545 13.0243 13.4545 13.0243 13.4545C13.0025 13.4109 13.0026 13.3674 12.9808 13.3238C12.9808 13.302 12.959 13.2803 12.959 13.2585C12.9372 13.2149 12.9155 13.1931 12.8937 13.1496C12.8719 13.1278 12.8719 13.106 12.8501 13.0625C12.8283 13.0407 12.8066 13.0189 12.8066 12.9971C12.5888 12.6922 12.1967 12.3655 11.6522 12.3219C11.4562 12.3002 11.3037 12.3002 11.1513 12.2784C11.2384 12.1041 11.4126 11.8646 11.6522 11.5379C12.4363 10.5142 17.01 9.33811 18.1208 9.03319C19.2316 8.72827 20.081 7.66106 19.9939 7.16012C19.9503 7.13834 19.9503 7.11657 19.9068 7.09479Z" />,
];

type Props = {
  color: string;
  scale?: number;
};
export default function Bird({ color, scale = 1 }: Props) {
  return (
    <g
      transform={`translate(${rand(1100, 100)},${rand(
        400
      )}) scale(${scale}, ${scale})`}
      className="tr-origin-bottom"
      fill={color}
    >
      {randChoise(birdPaths)}
    </g>
  );
}
