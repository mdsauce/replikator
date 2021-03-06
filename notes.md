https://saucelabs.zendesk.com/agent/tickets/86279 use as reference. Is this still an ongoing issue?

steps may be more robust https://docs.saucelabs.com/secure-connections/sauce-connect/proxy-tunnels/index.html

# replikator
use [multipass](https://multipass.run) to host the VMs at will.  So everyone in support can spin ubuntu servers up as needed.

Or use [vagrant](https://learn.hashicorp.com/vagrant)? 
https://medium.com/@fiercely/virtualization-on-mac-os-x-using-vagrant-part-1-be0f0e291938

Example of Vagrant + Virtual box internally at sauce: https://gitlab.prod.sjc3.saucelabs.net/vdc/vdc-tooling-vm/-/tree/marek-init

Examples of stuff we need (all items include sc at some level unless otherwise stated):
* server with nginx proxy that filters incoming traffic. 
* simple proxy (of any flavor) that routes some stuff to a localhost server and some stuff out to the internet
* iptables firewall
* localhost app/api only available from sc tunnel
* systemd tunnel management
    1. running like 5 of the same tunnel
    1. configuring and running two to three flavors of tunnel
    1. persisting or saving logs
* [webRTC](https://www.youtube.com/watch?v=WmR9IMUD_CY) server test?
* file upload/download into a VM or phone
* multipeer app test (multiple VMs)


# Setup
Do NOT use virtualbox if you're on a mac.  Just use the default [hyperkit](https://github.com/moby/hyperkit), which may require docker.

After that you can follow the guide to start a VM.

### How to do infrastructure as code though?
[cloud-init](https://cloudinit.readthedocs.io/en/latest/) or [ansible](https://www.ivankrizsan.se/2021/05/16/ansible-and-multipass-virtual-machines/)?  Which is doable?

# systemd and sauce connect
https://www.linode.com/docs/guides/introduction-to-systemctl/ good breakdown

Right now I can start the sc but cannot start a tunnel! Why? Where are the logs showing the error?


# generate .har file inside a ci/cd system
ci/cd http debug proxies are slim :/
https://docs.mitmproxy.org/stable/overview-getting-started/ maybe an option