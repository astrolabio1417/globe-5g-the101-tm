


# TAMPERMONKEY SCRIPT — GLOBE 5G (THE 101)

Globe at Home 5G — LuCI / OpenWrt fixes & Router admin developer mode and scripts for old router version

-   [x] DEVELOPER MODE
-   [x] OPENWRT LUCI PAGE
-   [x] UNLOCK 4/5G BAND LOCKING
-   [x] UNLOCK ALL NETWORKS
-   [x] IMEI CHANGER



script.js — bypasses client checks using custom headers & query params.
scriptHttps.js — automates developer-password login and exposes GPS/PLMN test buttons.

```
# USE THIS AT YOUR OWN RISK.
# The author is not responsible for any damage, data loss,
# or malfunction that may occur from using this script.
# By running it, you accept full responsibility for any consequences
# to your device or system.
```

## SCRIPTS

##### UNLOCK PLMN | UNLOCK ALL NETWORKS

```
ql_api ql_nw_set_plmn 0
```

##### GPS

```
# disable
uci set jygps.gps.switch='disable'
/etc/init.d/jytl_gps stop
uci commit

# enable
uci set jygps.gps.switch='enable'
/etc/init.d/jytl_gps start
uci commit
```

##### UPDATE OPKG CONFIGS

```
# https://4pda.to/forum/index.php?showtopic=1057776&st=4800

# /etc/opkg.conf
arch all 100
arch aarch64_cortex-a55_neon-vfpv4 200
arch aarch64_generic 300

# /etc/opkg/customfeeds.conf
src/gz packages http://archive.openwrt.org/releases/19.07.10/packages/aarch64_generic/packages
src/gz base http://archive.openwrt.org/releases/19.07.10/packages/aarch64_generic/base
src/gz luci http://archive.openwrt.org/releases/19.07.10/packages/aarch64_generic/luci
```

##### CHANGE IMEI

```
# VIA STARTUP CONFIG OR SSH
# http://192.168.0.1/cgi-bin/luci/admin/system/startup?flag=get_develop_mode&t=

mipc_wan_cli --at_cmd 'AT+EGMR=1,7,"IMEI"'
```

##### SETUP SSH USER(ROOT) PASSWORD

```
# setup new password and save
http://192.168.0.1/cgi-bin/luci/admin/system/admin?flag=get_develop_mode&t=
```
